const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

router.get('/', function(req,res) {
    res.sendFile((path.join(__dirname + '../../public/views/index.html')));
});

module.exports = router;