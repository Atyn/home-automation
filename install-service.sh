#!/bin/bash -xe

source ./definitions.sh

echo "Installing service ${SERVICE_NAME}..."

# Add user 
useradd -m ${SERVICE_NAME}

# Put executables at the right place
cp -r ./dist ${LIB_DIRECTORY}

# Put the service at the right place
cp ./systemd/${FILENAME} ${INSTALLABLE_PATH}

# Make it executable
chmod +x ${INSTALLABLE_PATH}

# Enable the script on boot
systemctl enable ${SERVICE_NAME}

# Start service 
systemctl start ${SERVICE_NAME}

systemctl status ${SERVICE_NAME}