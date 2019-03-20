/**
 * index .js - handles pages: index, results, share
 */

const path = require('path');

exports.indexGET = function(req,res) {
    res.sendFile((path.join(__dirname + '../../public/views/index.html')));
};

exports.resultsGET = function(req,res) {
    res.send('RESULTS GET');
};

exports.shareGET = function(req,res) {
    res.send('SHARE GET');
};