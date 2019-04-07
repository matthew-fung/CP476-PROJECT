const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.logoutGET);

module.exports = router;