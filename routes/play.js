const express = require('express');
const router = express.Router();
const playController = require('../controllers/playController');


router.get('/game1', playController.game1GET);
router.get('/game2', playController.game2GET);
router.get('/game3', playController.game3GET);

router.post('/game1', playController.game1POST);
router.post('/game2', playController.game2POST);
router.post('/game3', playController.game3POST);

//export this router to use in our index.js
module.exports = router;