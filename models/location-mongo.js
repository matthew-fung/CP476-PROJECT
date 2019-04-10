var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var LocationSchema = Schema({
    userID: {type: String},
    locationName: {type: String, required: true},
    address: {type: String, required: true}
});

var location = module.exports = mongoose.model('locations', LocationSchema);