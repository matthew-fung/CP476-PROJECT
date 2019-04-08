/**
 * playController .js - handles actions for game1, game2, and game3
 */

// TODO: import game model
// const Game = require('../models/game');
const axios = require('axios');
const TRIVIA_API_URL_TRUE_FALSE = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean';
const TRIVIA_API_URL_MULTIPLE_CHOICE = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple';

function getTrivia() {
    return axios.get(TRIVIA_API_URL_TRUE_FALSE);
}

// GAME 1
exports.game1GET = function (req, res) {
    getTrivia.then(function (response) {
        return response.data;
    }).catch(function (response) {
        if (response.data.response_code == 0) {
            let triviaQuestion = response.data.results[0].question;
            let triviaType = response.data.results[0].type;
            let triviaCorrectAnswer = response.data.results[0].correct_answer;
            res.render('play1', {
                questionTitle: triviaQuestion
            });
        }
    });
    // res.session.game1 = 'theresult';
}



exports.game1POST = function (req, res) {
    // res.send('GAME 1 POST');
    console.log(req.body);
    // res.send()
};


// GAME 2
exports.game2GET = function (req, res) {
    res.send('GAME 2 GET');
    // res.session.game2 = 'theresult';
};

exports.game2POST = function (req, res) {
    res.send('GAME 2 POST');
};


// GAME 3
exports.game3GET = function (req, res) {
    res.send('GAME 3 GET');
    // res.session.game3 = 'theresult';
};

exports.game3POST = function (req, res) {
    res.send('GAME 3 POST');
};