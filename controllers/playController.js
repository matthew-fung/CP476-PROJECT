/**
 * playController .js - handles actions for game1, game2, and game3
 */

// TODO: import game model
// const Game = require('../models/game');
const axios = require('axios');
const TRIVIA_API_URL_TRUE_FALSE = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean';
const TRIVIA_API_URL_MULTIPLE_CHOICE = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple';


// GAME 1
exports.game1GET = function(req,res) {
    axios.get(TRIVIA_API_URL_TRUE_FALSE)
    .then(response => {
        if(response.data.response_code == 0) {
            let triviaQuestion = response.data.results[0].question;
            let triviaType = response.data.results[0].type;
            let triviaCorrectAnswer = response.data.results[0].correct_answer;
            let triviaIncorrectAnswer = response.data.results[0].incorrect_answers[0];
            res.render('play1', {questionTitle: triviaQuestion});
        }
        
        
    })
    .catch(error => {
        console.log(error);
    });

    // res.send('GAME 1 GET');
    // res.send()
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
