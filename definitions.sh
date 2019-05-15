#!/bin/bash

export SERVICE_NAME="home-automation"
export LIB_DIRECTORY="/usr/lib/${SERVICE_NAME}"
export EXECUTABLE_PATH="${LIB_DIRECTORY}/start.js"
export FILENAME="${SERVICE_NAME}.service"
export INSTALLABLE_PATH="/etc/systemd/system/${FILENAME}"