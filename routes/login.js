const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.loginGET);
router.post('/', userController.loginPOST);

module.exports = router;