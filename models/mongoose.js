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

var results = new Schema({
    resultsID: {type: String, unique: true, required: true, dropDups: true},
    userID: {type: String, required: true},
    game1a: {type: String},
    game1b: {type: String},
    game2: {type: String},
    game3: {type: String},
    class: {type: String}
});

var location = new Schema({
    locationID: {type: String, unique: true, required: true, dropDups: true},
    locationName: {type: String, required: true},
    userID: {type: String, required: true},
    address: {type: String, required: true}
});