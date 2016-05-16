var express = require('express');
var mongoose = require('mongoose');
var app = express();

require('./api/models/Event.js');
require('./api/models/User.js');

mongoose.connect('mongodb://localhost/sisne');

// setup the port
var port = process.env.PORT || 5555;

// Router for the API
var router = express.Router();

router.use(function(req, res, next){
	console.log(req.method, req.url);

	next();
});

var routes = require('./routes/**/*.js');

// Use the routes
app.use('/api', routes);

// call the api
app.listen(port);
