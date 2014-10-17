GreenBeanify-pushover-notifications
===================================

Reference implementation for [GreenBeanify](https://github.com/rudybrian/GreenBeanify) POST notifications. Sends Pushover notifications on end of cycle

##Installation instructions
- On the host you wish to run GreenBeanify-pushover-notifications on
  - Install Node.js
  - Install npm
  - *npm install brudy/GreenBeanify-pushover-notifications*
  - cd into your GreenBeanify-pushover-notifications directory
  - Modify the following values on line 6 and 7 of routes/index.js
    - Replace *PUSHOVER_USER* with your Pushover user key
    - Replace *PUSHOVER_TOKEN* with your Pushover application API token/key (I recommend registering a new application with it's own token/key for this)
  - *npm start*
- On the host running GreenBeanify (both GreenBeanify and GreenBeanify-pushover-notifications can run on the same machine if desired)
  - cd into your GreenBeanify directory
  - Modify the following settings in the "post" section of config.json
    - *"enabled": true*
    - *"post_host": "GREENBEANIFYPUSHOVERIP"* (replacing *GREENBEANIFYPUSHOVERIP* with the IP or hostname of the host running GreenBeanify-pushover-notification)
    - *"post_port": "4000"*
    - *"post_path": "/pushover-notification"*
  - *npm start*
