var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

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
	isAdmin: {
		type: Boolean,
		default: false
	},
	isPublisher: {
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
	}
});

module.exports = mongoose.model('User', UserSchema);
