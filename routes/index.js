var express = require('express');
var router = express.Router();
var push = require('pushover-notifications');

var p = new push({
	user: 'PUSHOVER_USER',
	token: 'PUSHOVER_TOKEN',
});

/* POST to notification URL */
router.post('/pushover-notification', function(req, res) {
	if ((req.body.GreenBeanify.data.text === "End of cycle") && (req.body.GreenBeanify.messageType === "laundry.endOfCycle")) {
		// This POST tells us the cycle has completed, so send the Pushover notification
		console.log("We received an endOfCycle notification from ", req.body.GreenBeanify.serialNumber);
		var msg = {
			message: "Laundry cycle completed for: " + req.body.GreenBeanify.modelNumber + ", " + req.body.GreenBeanify.serialNumber,
			title: "GreenBeanify end of cycle notification",
			sound: 'magic',
			priority: 2,    // set priority 2 to require acknowledgement 
			expire: 3600, // Expire after 1 hour
			retry: 60      // Retry every 60 seconds until acknowledged
		}

		p.send(msg, function(err, result) {
			if ( err ) {
				throw err;
			}

			console.log( result );
			res.send("Notification sent");
		});
	} else {
		console.log("Ignoring POST as it isn't a laundry.endOfCycle");
		res.send("Not an end of cycle message, ignoring...");
	}
});

module.exports = router;
