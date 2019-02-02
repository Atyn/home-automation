#!/bin/bash

if [ -f ./tmp/pid ]; then
   echo "Service is already running"
else
   echo "Starting service!"
   sh ./start.sh & echo $! > tmp/pid
fi

