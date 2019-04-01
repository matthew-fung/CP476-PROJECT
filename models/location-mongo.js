var mongoose = require('mongoose');

//var mongoDB = "mongodb://localhost:27017/mydb";
//mongoose.connect(mongoDB, { useNewUrlParser: true });

//var db = mongoose.connection;
//    locationID: {type: String, unique: true, required: true, dropDups: true},
var Schema = mongoose.Schema({

    locationName: {type: String, required: true},
    userID: {type: String, required: true},
    address: {type: String, required: true}
})

var location = module.exports = mongoose.model('locations', Schema);