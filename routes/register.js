const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.registerGET);
router.post('/', userController.registerPOST);

module.exports = router;