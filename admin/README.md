# MAZI Admin Backend

This directory contains the backend interface

## Setup

* run `npm install` to install dependencies
* install compass
  * install ruby `brew install ruby` then add to path: `echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.zshrc`
  * then `gem install compass`
  * `echo 'export PATH="/usr/local/lib/ruby/gems/3.1.0/bin:$PATH"' >> ~/.zshrc` or wherever gem installed compass

## Build

build src files: `npm run build`

## Development

* auto compile src folder when making changes to the src files: `npm run watch`
* auto compile sass: `compass watch`

## Mazi image

* located in `/var/www/html/mazi-princess`
* restart with `sudo systemctl restart mazi-princess.service`