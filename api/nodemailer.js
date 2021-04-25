"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async (req) =>  {

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env['HOST'],
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env['EMAIL'], // generated ethereal user
      pass: process.env['PASSWORD'], // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'Kontaktformular Webseite" <kontaktformular@enval.de>', // sender address
    to: "j.haering@enval.de", // list of receivers
    subject: "Kontaktformular Webseite", // Subject line
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}


const getHtml = (req) => {
    return ``
}
