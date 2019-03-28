var mongoose = require('mongoose');

var mongoDB = "mongodb://localhost:27017/mydb";
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

var Schema = mongoose.Schema;

var userSchema = new Schema({
    userID: {type: String, unique: true, required: true, dropDups: true},
    name: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    accountCreation: {type: Date, default: Date.now}
});