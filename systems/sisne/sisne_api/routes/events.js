var express = require('express');
var router = express.Router();
var Event = require('./../models/Event');

function ensureAuthenticated(req, res, next){
	if (req.isAuthenticated()) {
		next();
	} else {
		req.flash('info', 'You must be logged to see this page');
		res.redirect('/login');
	}
}

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
router.post('/', ensureAuthenticated, function(req, res, next) {
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
	Event.findOne({
		key: req.params.event_key
	}, function(err, event) {
		if (err) {
			console.log(err);
			res.send(err);
		}
		res.status(200).send(event);
	});
});

router.put('/:event_key', ensureAuthenticated, function(req, res, next) {

	var update = req.body;
	update.updated_at = Date.now();

	Event.findOneAndUpdate({
		key: req.params.event_key
	}, {
		$set: { update }
	}, function(err, update) {
		if (err) {
			console.log(err);
			res.send(err);
		}

		res.status(200).send(update);
	});
});

router.delete('/:event_key', ensureAuthenticated, function(req, res, next) {
	Event.findOneAndRemove({
		key: req.params.event_key
	}, function(err, success){
		if (err) { console.log(err); }
		return status(200).send({message: 'Event deleted'});
	});
});

router.get('/?s', function(req, res, next){
	
});

module.exports = router;
