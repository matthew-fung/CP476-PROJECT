var mongoose = require('mongoose');

//var mongoDB = "mongodb://localhost:27017/mydb";
//mongoose.connect(mongoDB, { useNewUrlParser: true });
//
//var db = mongoose.connection;
//    resultsID: {type: String, unique: true, required: true, dropDups: true},
var Schema = mongoose.Schema({
    userID: {type: String, required: true},
    game1a: {type: String},
    game1b: {type: String},
    game2: {type: String},
    game3: {type: String},
    class: {type: String}
});

var result = module.exports = mongoose.model('results', Schema);