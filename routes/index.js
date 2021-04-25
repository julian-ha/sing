var express = require('express');
var router = express.Router();

const nodemailerApi = require('../api/nodemailer');

/* GET home page. */
router.post('/sendEmail', async (req, res, next) => {
  var response = await nodemailerApi.sendEmail(req.body);
 if (!response) {
  res.status(500).json({
    message: 'error'
  });
  return
 }

  res.status(200).json({
    message: 'success'
  });
});

module.exports = router;
