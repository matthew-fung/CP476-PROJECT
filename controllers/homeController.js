/**
 * home.js
 */

const path = require('path');
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
