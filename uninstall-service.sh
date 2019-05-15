#!/bin/bash

source ./definitions.sh

systemctl disable ${SERVICE_NAME}
systemctl stop ${SERVICE_NAME}

rm -rf ${LIB_DIRECTORY}
