var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
	id: ObjectId,
	name: String,
	email: String,
	bio: String,
	notifications: Boolean,
	isAdmin: { type: Boolean, default: false},
	isPublisher: { type: Boolean, default: false}
})

module.exports = mongoose.model('User', UserSchema)
