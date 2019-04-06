var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');
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
//
//Schema.statics.authenticate = function (email, password, callback) {
//  User.findOne({ email: email })
//    .exec(function (err, user) {
//      if (err) {
//        return callback(err)
//      } else if (!user) {
//        var err = new Error('User not found.');
//        err.status = 401;
//        return callback(err);
//      }
//      bcrypt.compare(password, user.password, function (err, result) {
//        if (result === true) {
//          return callback(null, user);
//        } else {
//          return callback();
//        }
//      })
//    });
//}

var user = module.exports = mongoose.model('users', Schema);