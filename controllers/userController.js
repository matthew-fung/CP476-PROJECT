/**
 * userController.js - handles GET/POST actions for login/register
 */

// TODO: import user
// const User = require('../models/user');
const path = require('path');
const bodyParser = require('body-parser');

// REGISTER
exports.registerGET = function(req, res) {
    res.render('register');
};

exports.registerPOST = function(req, res) {
    // TODO: handle register POST
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    res.send("username: " + username + "<br>" + "password: " + password + "<br>" + "email:" + email);
};


// LOGIN
exports.loginGET = function(req, res) {
    res.render('login');
};
exports.loginPOST = function(req, res) {
    // TODO: authentication (need db to be set up first)
    const username = req.body.username;
    const password = req.body.password;

    res.send("username: " + username + "<br>" + "password: " + password);
};


// UPDATE
exports.updateGET = function(req, res) {
    res.send('NOT IMPLEMENTED: user update GET');
};

exports.updatePOST = function(req, res) {
    res.send('NOT IMPLEMENTED: user update POST');
};


// DELETE
exports.deleteGET = function(req, res) {
    res.send('NOT IMPLEMENTED: user delete GET');
};

exports.deletePOST = function(req, res) {
    res.send('NOT IMPLEMENTED: user delete POST');
};