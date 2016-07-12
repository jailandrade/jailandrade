var express = require('express');
var router = express.Router();
var Event = require('./../models/Event');

/* GET all the events. */
router.get('/', function(req, res, next) {

	Event.find(function(err, events) {
		if (err) {
			console.log(err);
			res.send(err);
		}
		res.status(200).json(events);
	});

});

/* Post new event */
router.post('/', function(req, res, next) {
	var event = new Event(req.body);
	event.created_at = Date.now();
	
	event.save(function(err) {
		if (err) {
			console.log(err);
			res.send(err);
		}

		res.status(200).json({
			message: 'Event created'
		});
	});

});

/* Get a event by key */
router.get('/:event_key', function(req, res, next) {
	Event.findOne({key: req.params.event_key}, function(err, event) {
		if (err) {
			console.log(err);
			res.send(err);
		}
		res.status(200).send(event);
	});
});

router.put('/:event_key', function(req, res, next) {
	
	var event_update = req.body;
	event_update.updated_at = Date.now();
	console.log(event_update);

	Event.findOneAndUpdate({key: req.params.event_key}, {
		$set: {event_update}
	}, function(err, update) {
		if (err) {
			console.log(err);
			res.send(err);
		}

		res.send(update);
	});
});

module.exports = router;
