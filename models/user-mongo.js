var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var UserSchema = Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    salt: {type: String, unique: true, required: true},
    email: {type: String, unique:true, required: true, dropDups: true}
});

var user = module.exports = mongoose.model('users', UserSchema);