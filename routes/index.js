const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.indexGET);
router.get('/results', indexController.resultsGET);
router.get('/share', indexController.shareGET);
router.get('/destination', indexController.destinationGET);

module.exports = router;