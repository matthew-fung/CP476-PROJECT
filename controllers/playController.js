/**
 * playController .js - handles actions for game1, game2, and game3
 */

const Result = require('../models/result-mongo');
const axios = require('axios');
const TRIVIA_API_URL_TRUE_FALSE = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=boolean';
// const TRIVIA_API_URL_MULTIPLE_CHOICE = 'https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple';



// GAME 1
exports.game1GET = function (req, res) {
    axios.get(TRIVIA_API_URL_TRUE_FALSE).then(function (response) {

        if (response.data.response_code == 0) {
            let triviaQuestion = response.data.results[0].question;
            let triviaType = response.data.results[0].type;
            let triviaCorrectAnswer = response.data.results[0].correct_answer;
            req.session.game1Answer = triviaCorrectAnswer;
            
            res.render('play1', {
                questionTitle: triviaQuestion,
            });
        };
    });
};

exports.game1POST = function (req, res) {

    userGame1Answer = req.body.userGame1Answer;
    game1Answer = req.session.game1Answer;
    console.log('userGame1Answer:' + req.body.userGame1Answer);
    console.log('game1Answer:' + req.session.game1Answer);

    let game1result = new Result();

    if (userGame1Answer == game1Answer) {
        var result = 'pass';
    } else {
        var result = 'fail';
    };

    game1result.userID = req.session.userId;
    game1result.game1 = result;
    game1result.save(function (error, game1result) {
        if (error) {
            console.log("Game 1 result error:" + error);
            res.send('error saving game1 result');
        } else {
            console.log("game 1 result stored successfully");
            req.session.game1result = result;
            req.session.save();
            res.redirect('/play/game2');
        };
    });
};


// GAME 2
exports.game2GET = function (req, res) {
    res.render('play2');
    
};

exports.game2POST = function (req, res) {
    bagelsClicked = req.body.userGame2Answer;
    if(bagelsClicked == 3) {
        req.body.userGame2Answer = "pass";
    } else {
        req.body.userGame2Answer = "fail";
    }

    let game2result = new Result();

    game2result.userID = req.session.userId;
    game2result.game2 = req.body.userGame2Answer;

    game2result.save(function (error, game2result) {
        if (error) {
            console.log("Game 2 result error:" + error);
            res.send('error saving game2 result');
        } else {
            console.log("game 2 result stored successfully");
            req.session.game2result = req.body.userGame2Answer;
            req.session.save();
            res.redirect('/play/game3');
        };
    });
};


// GAME 3
exports.game3GET = function (req, res) {
    res.render('play3');
    // res.session.game3 = 'theresult';
};

exports.game3POST = function (req, res) {
    userGame3Answer = req.body.userGame3Answer;

    let game3result = new Result();

    game3result.userID = req.session.userId;
    game3result.game3 = req.body.userGame2Answer;

    game3result.save(function (error, game2result) {
        if (error) {
            console.log("Game 3 result error:" + error);
            res.send('error saving game3 result');
        } else {
            console.log("game 3 result stored successfully");
            req.session.game3result = req.body.userGame3Answer;
            req.session.save();
            res.redirect('/results');
        };
    });
};