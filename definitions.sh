#!/bin/bash

SERVICE_NAME="home-automation"
LIB_DIRECTORY="/usr/lib/${SERVICE_NAME}"
EXECUTABLE_PATH="${LIB_DIRECTORY}/main.js"
FILENAME="${SERVICE_NAME}.service"
INSTALLABLE_PATH="/etc/systemd/system/${FILENAME}"