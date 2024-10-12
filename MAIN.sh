#!/bin/bash

echo -e "sh /home/admin/sudo.sh" | sudo su &
echo -e "sh /home/kiosk/kiosk.sh" | sudo su kiosk &
