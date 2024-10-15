#!/bin/bash

## echo "sh /home/sandbox/sandbox.sh" | sudo su sandbox &

## echo "sh /home/kiosk/kiosk.sh" | sudo su kiosk &

echo "sh /run/live/medium/kiosk.sh" | sudo su kiosk &

while true; do
    sleep 1
done
