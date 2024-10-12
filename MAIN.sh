#!/bin/bash

echo "sh ./home/admin/sudo.sh" | sudo su &

echo "sh ./home/kiosk/kiosk.sh" | sudo su kiosk &
