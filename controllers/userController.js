/**
 * userController.js - handles GET/POST actions for login/register
 */
var crypto = require('crypto');

// TODO: import user
const User = require('../models/user-mongo');
const path = require('path');
const bodyParser = require('body-parser');

// REGISTER
exports.registerGET = function (req, res) {
    res.render('register');
};

exports.registerPOST = function (req, res) {
    // TODO: handle register POST
    let user = new User();

    var passSalt = generateSalt();
    var hash = crypto.createHmac('sha1', passSalt).update(req.body.password).digest('hex');
    
    console.log(passSalt);
    console.log(hash);
    
    console.log(passSalt.typeof)
    user.name = req.body.name;
    user.password = hash;
    user.salt = passSalt;
    user.email = req.body.email;

    user.save(function (error) {
        if (error) {
            console.log("Register Error:" + error);
            res.redirect('/register');
        } else {
            console.log("Register Successful");
            res.redirect('/home');
        }
    });

    function generateSalt() {
        var buf = crypto.randomBytes(16);
        console.log(buf.typeof)
        return buf.toString('hex');
    }
};


// LOGIN
exports.loginGET = function (req, res) {
    res.render('login');
};
exports.loginPOST = function (req, res) {
    // TODO: authentication (need db to be set up first)

    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) return handleError(err);
        
        var Hash = pbkdf2(req.body.password, user.passSalt);
        
//        var buf = Buffer.from(user.passSalt);
        
//        var hash = crypto.createHmac('sha1', buf).update(req.body.password).digest('hex');
        
        if (user.email == req.body.email && hash == user.password) {
            console.log('%s %s %s', user.email, user.name, user.password);

            res.redirect('/home');
        } else {
            console.log("Incorrect login info");
            res.redirect('/login');
        }
    });
};


// UPDATE
exports.updateGET = function (req, res) {
    res.send('NOT IMPLEMENTED: user update GET');
};

exports.updatePOST = function (req, res) {
    res.send('NOT IMPLEMENTED: user update POST');
};


// DELETE
exports.deleteGET = function (req, res) {
    res.send('NOT IMPLEMENTED: user delete GET');
};

exports.deletePOST = function (req, res) {
    res.send('NOT IMPLEMENTED: user delete POST');
};
