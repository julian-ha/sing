var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/sendEmail', function(req, res, next) {
  

  res.sendStatus(200);
});

module.exports = router;
