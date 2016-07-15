var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var helmet = require('helmet');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

mongoose.connect('mongodb://localhost/sisne');

// Here we can define the routes
var routes = require('./routes/index');
var users = require('./routes/users');
var events = require('./routes/events');

// Here we can define the models
var User = require('./models/User');
var Event = require('./models/Event');

// Initialize the app
var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('express-session')({
	secret: 'q~06M{|/c0Cik.?KGjD>;Zp2eD3 $})}|z$;6#k4`Qu-P&KI6jXUH/v=UsMXz,fZ1?/^g|eF8$#E+Pfxubnso+WQM3w+/}D',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', routes);
app.use('/api/v1/users', users);
app.use('/api/v1/events', events);

app.use(helmet());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.send(err);
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.send(err);
});


module.exports = app;
