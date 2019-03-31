/**
 * index .js - handles pages: index, results, share
 */

const path = require('path');

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