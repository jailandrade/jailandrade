var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	shortid = require('shortid'),
	ObjectId = Schema.ObjectId;

var EventSchema = new Schema({
	id: ObjectId,
	key: {
		type: String,
		default: shortid.generate
	},
	name: {
		type: String,
		default: ''
	},
	created_at: {
		type: Date
	},
	updated_at: {
		type: Date
	},
	date: {
		type: Date
	},
	place: {
		type: String,
		default: ''
	},
	duration: {
		type: Number,
		default: false
	},
	description: {
		type: String,
		default: ''
	},
	category: {
		type: String,
		default: ''
	},
	admission: {
		type: Boolean,
		default: false
	},
	capacity: {
		type: Number,
		default: 0
	},
	reservation: {
		type: Boolean,
		default: false
	},
	price: {
		type: Number,
		default: 0
	},
	tags: {
		type: Array
	},
	published_by: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	geometry: {
		coordinates: {
			type: Array,
			index: '2dsphere'
		}
	}
});

module.exports = mongoose.model('Event', EventSchema);
