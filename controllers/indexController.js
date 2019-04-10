/**
 * index .js - handles pages: index, results, share
 */

const path = require('path');
const Result = require('../models/result-mongo');

exports.indexGET = function(req,res) {
    res.render('index');
};

exports.resultsGET = function(req,res) {
    game1result = req.session.game1result;
    game2result = req.session.game2result;
    game3result = req.session.game3result;
    var points = 0;
    if(game1result == "pass") {
        points++;
    }
    if(game2result == "pass") {
        points++;
    }
    if(game3result == "pass") {
        points++;
    }

    if(points < 3 ) {
        res.render('resultsFail');
    } else {
        res.render('resultsPass');
    }
        
};

exports.shareGET = function(req,res) {
    res.render('share');
};

exports.destinationGET = function(req, res) {
    res.sendFile(__dirname + '/destination.html');
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