GreenBeanify-pushover-notifications
===================================

Reference implementation for [GreenBeanify](https://github.com/rudybrian/GreenBeanify) POST notifications. Sends [Pushover](https://pushover.net) notifications on end of cycle for your Green Bean equipped GE washing machine or dryer.

##Installation and Demo Video
[![Installation Video](http://img.youtube.com/vi/AjoRDDi2Anw/0.jpg)](https://www.youtube.com/watch?v=AjoRDDi2Anw)
[![Demo Video](http://img.youtube.com/vi/jxN31WzsJAk/0.jpg)](https://www.youtube.com/watch?v=jxN31WzsJAk)

##Installation Instructions
- On the host you wish to run GreenBeanify-pushover-notifications on
  - Install Node.js
  - Install npm
  - *npm install rudybrian/GreenBeanify-pushover-notifications*
  - cd into your GreenBeanify-pushover-notifications directory (this may be in your *~/node-modules/* directory or in the local path depending on the method of installation)
  - Modify the following values on line 6 and 7 of routes/index.js
    - Replace *PUSHOVER_USER* with your [Pushover](https://pushover.net) user key
    - Replace *PUSHOVER_TOKEN* with your [Pushover](https://pushover.net) application API token/key (I recommend registering a new application with it's own token/key for this)
  - *npm start*
- On the host running GreenBeanify (both GreenBeanify and GreenBeanify-pushover-notifications can run on the same machine if desired)
  - cd into your GreenBeanify directory
  - Modify the following settings in the "post" section of config.json
    - *"enabled": true*
    - *"post_host": "GREENBEANIFYPUSHOVERIP"* (replacing *GREENBEANIFYPUSHOVERIP* with the IP or hostname of the host running GreenBeanify-pushover-notification that GreenBeanify should send the POSTs to)
    - *"post_port": "4000"*
    - *"post_path": "/pushover-notification"*
  - *npm start*
