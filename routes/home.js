const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/', homeController.homeGET);
router.get('/logout', homeController.logoutGET);
router.get('/test', homeController.profileGET);

module.exports = router;