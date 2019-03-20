/**
 * playController .js - handles actions for game1, game2, and game3
 */

// TODO: import game model
// const Game = require('../models/game');

// GAME 1
exports.game1GET = function(req,res) {
    res.send('GAME 1 GET');
};
exports.game1POST = function(req,res) {
    res.send('GAME 1 POST');
};


// GAME 2
exports.game2GET = function(req,res) {
    res.send('GAME 2 GET');
};

exports.game2POST = function(req,res) {
    res.send('GAME 2 POST');
};


// GAME 3
exports.game3GET = function(req,res) {
    res.send('GAME 3 GET');
};

exports.game3POST = function(req,res) {
    res.send('GAME 3 POST');
};
