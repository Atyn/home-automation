#!/bin/bash -xe

source ./definitions.sh

systemctl disable ${SERVICE_NAME}
systemctl stop ${SERVICE_NAME}

rm -rf ${LIB_DIRECTORY}

userdel -rf ${SERVICE_NAME}
