var mongoose = require('mongoose');
var user = require('./user-mongo');

const Schema = mongoose.Schema;

var LocationSchema = Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'users' },
    locationName: {type: String, required: true},
    address: {type: String, required: true}
});

var location = module.exports = mongoose.model('locations', LocationSchema);