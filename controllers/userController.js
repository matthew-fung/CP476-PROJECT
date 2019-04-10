/**
 * userController.js - handles GET/POST actions for login/register
 */
var crypto = require('crypto');

// TODO: import user
const User = require('../models/user-mongo');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

var encrypt = function (password, salt) {
    var hash = crypto.createHmac('sha256', salt);
    hash.update(password);
    var passHash = hash.digest('hex');
    return passHash;
};

var salt = function generateSalt() {
    var buf = crypto.randomBytes(16);
    console.log(buf.typeof)
    return buf.toString('hex');
};

// REGISTER
exports.registerGET = function (req, res) {
    res.render('register');
};

exports.registerPOST = function (req, res, e) {
    let user = new User();

    var passSalt = salt();
    var passHash = encrypt(req.body.password, passSalt);

    user.name = req.body.name;
    user.password = passHash;
    user.salt = passSalt;
    user.email = req.body.email;

    user.save(function (error, user) {
        if (error) {
            console.log("Register Error:" + error);
            res.send('error registering');
        } else {
            console.log("Register Successful");
            req.session.userId = user._id;
            req.session.save();
            res.redirect('/home');
        }
    });
};

// LOGIN
exports.loginGET = function (req, res) {
    res.render('login');
};

exports.loginPOST = function (req, res) {
    if (req.body.email && req.body.password) {

        User.findOne({
            email: req.body.email
        }, function (err, user) {
            if (err) return handleError(err);
            console.log(user);
            if (user) {
                console.log('%s %s %s', user.email, user.name, user.password);
                var tryHash = encrypt(req.body.password, user.salt);

                if (user.email == req.body.email && tryHash == user.password) {
                    req.session.userId = user._id;
                    req.session.save();
                    console.log(req.session);
                    console.log("login success");
                    res.redirect('/home');
                } else {
                    console.log("error verifying login");
                    res.send('user not found');
                }
            }
        });
    } else {
        console.log("Incorrect login info");
        res.send('error logging in');
    }
};
