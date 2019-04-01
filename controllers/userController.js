/**
 * userController.js - handles GET/POST actions for login/register
 */

// TODO: import user
const User = require('../models/user-mongo');
const path = require('path');
const bodyParser = require('body-parser');

// REGISTER
exports.registerGET = function(req, res) {
    res.render('register');
};

exports.registerPOST = function(req, res) {
    // TODO: handle register POST
    let user = new User();
    user.name = req.body.name;
    user.password = req.body.password;
    user.email = req.body.email;
    
    user.save(function(error){
        if(error){
            console.log("Register Error:"+error);
            return;
        } else {
            console.log("Register Successful");
            res.redirect('/home');
        }
    });
    
//    res.send("name: " + name + "<br>" + "password: " + password + "<br>" + "email:" + email);
};


// LOGIN
exports.loginGET = function(req, res) {
    res.render('login');
};
exports.loginPOST = function(req, res) {
    // TODO: authentication (need db to be set up first)

//    user.save(function(error){
//        if(error){
//            console.log(error);
//            return;
//        } else {
//            res.redirect('/');
//        }
//    });
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