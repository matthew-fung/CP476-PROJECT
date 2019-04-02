var mongoose = require('mongoose');

//var mongoDB = "mongodb://localhost:27017/mydb";
//mongoose.connect(mongoDB, { useNewUrlParser: true });
//
//var db = mongoose.connection;
//userID: {type: String, unique: true, required: true, dropDups: true},
    
var Schema = mongoose.Schema({
    name: {type: String, required: true},
    password: {type: String, required: true},
    salt: {type: String, unique: true, required: true},
    email: {type: String, unique:true, required: true, dropDups: true},
    accountCreation: {type: Date, default: Date.now}
});

var user = module.exports = mongoose.model('users', Schema);