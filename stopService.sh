#!/bin/bash

SERVICE_PID=$(cat tmp/pid)
echo "stopping service ${SERVICE_PID}"
echo "stopping service ${SERVICE_PID}" >> logs/main.txt
kill ${SERVICE_PID}
rm tmp/pid