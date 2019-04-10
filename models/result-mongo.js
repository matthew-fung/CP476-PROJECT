var mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ResultsSchema = Schema({
    userID: { type: String },
    game1: {type: String},
    game2: {type: String},
    game3: {type: String},
    class: {type: String}
});

var result = module.exports = mongoose.model('results', ResultsSchema);