const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile((path.join(__dirname + '../../public/views/register.html')));
});

// TODO: handle register POST
router.post('/', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    res.send("username: " + username + "<br>" + "password: " + password + "<br>" + "email:" + email);

});

module.exports = router;