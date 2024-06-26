#!/bin/bash

#update package list
sudo apt update -y

# install nodejs 18 & npm
sudo apt install nodejs -y && sudo apt install -y npm

# update package list and install pm2(nodejs Process Manager 2)
sudo apt update -y && sudo npm install -g pm2

# go to directory to dowload code
cd /srv/

# clone strapi app 
git clone https://github.com/safaira/strapi.git
cd strapi/

# run application 
pm2 start npm --name strapi -- run start

#restart pm2 
sudo pm2 startup systemd

# sudo env PATH=$PATH:/home/ubuntu/.nvm/versions/node/v18.0.0/bin /home/ubuntu/.nvm/versions/node/v18.0.0/lib/node_modules/pm2/bin/pm2 startup systemd -u ubuntu --hp /home/ubuntu
