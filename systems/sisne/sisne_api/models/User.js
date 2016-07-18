var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var	ObjectId = Schema.ObjectId;
var bcrypt = require('bcrypt-nodejs');
var SALT_FACTOR = 10;


var UserSchema = new Schema({
	id: ObjectId,
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String
	},
	bio: {
		type: String,
		default: ''
	},
	username: {
		type: String,
		default: ''
	},
	notifications: [{
		email: false,
		in_app: false
	}],
	is_admin: {
		type: Boolean,
		default: false
	},
	is_publisher: {
		type: Boolean,
		default: false
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	updated_at: {
		type: Date,
		default: Date.now
	},
	events: [{
		type: Schema.Types.ObjectId,
		ref: 'Event'
	}]
});

var noop = function(){};

UserSchema.pre('save', function(done){
	var user = this;

	if (!user.isModified('password')){
		return done();
	}
	bcrypt.genSalt(SALT_FACTOR, function(err, salt){
		if (err) {return done(err);}

		bcrypt.hash(user.password, salt, noop, function(err, hashedPassword){
			if (err) {return done(err);}

			user.password = hashedPassword;
			done();
		});
	});
});

UserSchema.methods.checkPassword = function(guess, done){
	bcrypt.compare(guess, this.password, function(err, isMatch){
		done(err, isMatch);
	});
};

module.exports = mongoose.model('User', UserSchema);
