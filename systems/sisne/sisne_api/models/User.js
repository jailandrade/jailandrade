var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
	id: ObjectId,
	name: {type: String, required: true},
	email: {type: String, required: true, unique: true},
	bio: String,
	username: { type: String},
	notifications: Boolean,
	isAdmin: { type: Boolean, default: false},
	isPublisher: { type: Boolean, default: false},
	created_at: {type: Date},
	updated_at: {type: Date}
});

module.exports = mongoose.model('User', UserSchema)
