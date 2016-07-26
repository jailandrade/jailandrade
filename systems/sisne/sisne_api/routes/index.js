var express = require('express');
var User = require('../models/User');
var passport = require('passport');

var router = express.Router();

router.use(function(req, res, next){
	res.locals.currentUser = req.user;
	next();
});

router.get('/', function(req, res, next){
	res.status(200).json({message: 'welcome to Sisne'});
});

router.post('/login', passport.authenticate('login', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true
}));

router.post('/signup', function(req, res, next){
	var name = req.body.name;
	var username = req.body.username;
	var password = req.body.password;
	var email = req.body.email;

	User.findOne({username: username}, function(err, user){
		if (err) {return next(err);}
		if (user) {
			return res.status(200).send({message: 'Usuario existe'});
		}

		var newUser = new User({
			name: name,
			username: username,
			password: password,
			email: email
		});
		newUser.save(next);
	});
}, passport.authenticate('login', {
	successRedirect: '/dashboard',
	failureRedirect: '/signup',
	failureFlash: true
}));

router.get('/logout', function(req, res){
	req.logout();
	res.redirect('/');
});

module.exports = router;
