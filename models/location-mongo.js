var mongoose = require('mongoose');

var mongoDB = "mongodb://localhost:27017/mydb";
mongoose.connect(mongoDB, { useNewUrlParser: true });

var db = mongoose.connection;

var Schema = mongoose.Schema;

var location = new Schema({
    locationID: {type: String, unique: true, required: true, dropDups: true},
    locationName: {type: String, required: true},
    userID: {type: String, required: true},
    address: {type: String, required: true}
});