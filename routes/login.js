const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile((path.join(__dirname + '../../public/views/login.html')));
});

// TODO: authentication (need db to be set up first)
router.post('/', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    res.send("username: " + username + "<br>" + "password: " + password);
    
})

module.exports = router;