var express = require('express');
var router = express.Router();

const nodemailerApi = require('../api/nodemailer');

/* GET home page. */
router.post('/sendEmail', async (req, res, next) => {
  await nodemailerApi.sendEmail(req.body)

  res.sendStatus(200);
});

module.exports = router;
