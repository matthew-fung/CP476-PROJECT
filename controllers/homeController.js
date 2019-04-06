/**
 * home.js
 */

const path = require('path');

exports.homeGET = function(req,res) {
    res.render('home');
};

// GET route after registering
exports.profileGET = function (req, res) {
    console.log("profile");
    console.log(req.session.userId);
    console.log("hi");
    if(req.session.page_views){
      req.session.page_views++;
      res.send("You visited this page " + req.session.page_views + " times");
   } else {
      req.session.page_views = 1;
      res.send("Welcome to this page for the first time!");
   }
//  User.findById(req.session.userId)
//    .exec(function (error, user) {
//      if (error) {
//        return next(error);
//      } else {
//        if (user === null) {
//          var err = new Error('Not authorized! Go back!');
//          err.status = 400;
//          return next(err);
//        } else {
//          return res.send('<h1>Name: </h1>' + user.username + '<h2>Mail: </h2>' + user.email + '<br><a type="button" href="/logout">Logout</a>')
//        }
//      }
//    });
};

exports.logoutGET = function (req, res) {
    console.log("logout");
    console.log(req.session);
  if (req.session) {
    req.session.destroy(function (err) {
      if (err) {
        console.log("error deleting session");
      } else {
        console.log("logout success");
        res.redirect('/index');
      }
    });
  }
};