var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var EventSchema = new Schema({
    id: ObjectId,
    name: String,
    date: Date,
    date_creation: { type: Date},
    place: String,
    duration: Number,
    description: String,
    category: String,
    admission: String,
    capacity: Number,
    reservation: Boolean,
    price: Number
})

module.exports = mongoose.model('Event', EventSchema)
