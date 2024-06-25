#!/bin/sh

# # Initialize Git config
# if [ -d '.git' ]
# then
#   cat .gitconfig >> .git/config
# elif [ -f '.git' ]
# then
#   read -ra CONFIG <<< $(cat .git)
#   cat .gitconfig >> "${CONFIG[1]}/config"
# fi

# Install required dependencies
npm ci

npm run create-env
