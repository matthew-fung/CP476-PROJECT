var mongoose = require('mongoose');

var result = require('./result-mongo');
var location = require('./location-mongo');

const Schema = mongoose.Schema;

var UserSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: {type: String, required: true},
    password: {type: String, required: true},
    salt: {type: String, unique: true, required: true},
    email: {type: String, unique:true, required: true, dropDups: true},
    results: [{ type: Schema.Types.ObjectId, ref: 'results' }],
    locations:[{ type: Schema.Types.ObjectId, ref: 'locations' }]
});

var user = module.exports = mongoose.model('users', UserSchema);