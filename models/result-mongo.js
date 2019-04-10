var mongoose = require('mongoose');
var user = require('./user-mongo');

const Schema = mongoose.Schema;

var ResultsSchema = Schema({
    userID: { type: Schema.Types.ObjectId, ref: 'users' },
    game1: {type: String},
    game2: {type: String},
    game3: {type: String},
    class: {type: String}
});

var result = module.exports = mongoose.model('results', ResultsSchema);