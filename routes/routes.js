const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

router.get('/', function(req,res) {
    res.sendFile((path.join(__dirname + '../../public/views/index.html')));
})

router.get('/login', function(req,res) {
    res.sendFile((path.join(__dirname + '../../public/views/login.html')));
});

// TODO: handle login POST
router.post('/login', function(req,res) {

})

router.get('/register', function (req, res) {
    res.sendFile((path.join(__dirname + '../../public/views/register.html')));
});


// TODO: handle register POST
router.post('/register', function (req, res) {
   
});
module.exports = router