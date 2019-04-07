var mongoose = require('mongoose');

var Schema = mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    salt: {type: String, unique: true, required: true},
    email: {type: String, unique:true, required: true, dropDups: true},
    accountCreation: {type: Date, default: Date.now}
});

var user = module.exports = mongoose.model('users', Schema);