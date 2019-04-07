const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.resultGET);

module.exports = router;