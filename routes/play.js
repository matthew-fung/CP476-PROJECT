const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
   res.send('GET route on play.');
});
router.post('/', function(req, res){
   res.send('POST route on play.');
});

//export this router to use in our index.js
module.exports = router;