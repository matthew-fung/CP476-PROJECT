/**
 * home.js
 */

const path = require('path');

exports.homeGET = function(req,res) {
    res.render('home');
};