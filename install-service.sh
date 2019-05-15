#!/bin/bash

source ./definitions.sh

echo "INSTALLABLE_PATH: ${INSTALLABLE_PATH}"


# Put the script at the right place
#cp ./systemd/${FILENAME} ${INSTALLABLE_PATH}

# Make it executable
#chmod +x ${INSTALLABLE_PATH}

# Enable the script on boot
#systemctl enable ${SERVICE_NAME}

# Start service 
#systemctl start ${SERVICE_NAME}