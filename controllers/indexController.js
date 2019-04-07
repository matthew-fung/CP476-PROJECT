/**
 * index .js - handles pages: index, results, share
 */

const path = require('path');
const Result = require('../models/result-mongo');

exports.indexGET = function(req,res) {
    res.render('index');
};

exports.resultsGET = function(req,res) {
    res.send('RESULTS GET');
};

exports.shareGET = function(req,res) {
    res.render('share');
};

exports.destinationGET = function(req, res) {
    res.sendFile(__dirname + '/destination.html');
    // res.sendFile(path.join((__dirname));
    // res.send(path.join((__dirname)));
};

exports.homeGET = function (req, res) {
    if (req.session) {
        if (req.session.page_views) {
            req.session.page_views++;
            console.log("You visited this page " + req.session.page_views + " times");
        } else {
            req.session.page_views = 1;
            console.log("Welcome to this page for the first time!");
        }

        console.log(req.session.page_views);
        req.session.save();
        console.log("homeGET");
        res.render('home');
    } else {
        res.send('user not logged in');
    }
};

exports.logoutGET = function (req, res) {
    if (req.session) {
        req.session.destroy(function (err) {
            if (err) {
                console.log("error deleting session" + err);
            } else {
                console.log("logout success");
            }
        });
    }
    res.redirect('/');
};


exports.resultGET = function (req, res) {
//    if (res.session.game1 && res.session.game2 && res.session.game3) {

//        let result = new Result();

//        result.userID = res.session.userID;
//        result.game1a = res.session.game1;
//        result.game1b = res.session.game1;
//        result.game2 = res.session.game2;
//        result.game3 = res.session.game3;
//        result.class = res.session.class;

//        result.save(function (err) {
//            if (err) {
//                console.log(err);
//            } else {
//                console.log("results saved to user");
//            }
//        });

//        res.render('result');
//    }
};