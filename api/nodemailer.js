"use strict";
const nodemailer = require("nodemailer");

const getHtml = (req) => {
  return `
  <p>
      <b>
          Es kam eine Anfrage über das Kontaktformular der Webseite.
      </b>
  </p>
  <br>
  <p>
      <b>Daten:</b> 
      <br>
      <b>Vorname:</b> ${req.vorname} <br>
      <b>Nachname:</b> ${req.nachname} <br>
      <b>Email:</b> ${req.email} <br>
      <b>Telefonnummer:</b> ${req.telefonnummer} <br>
      <b>Betreff:</b> ${req.betreff} <br>
      <b>Nachricht:</b> ${req.nachricht}
  </p>
  <br>
  <p>Viele Grüße, <br>Ihr Bot von Enval.</p>`;
}

// async..await is not allowed in global scope, must use a wrapper
module.exports = {
  sendEmail: async (body) =>  {

    try {
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
          from: '"Kontaktformular Webseite" <kontaktformular@enval.de>', // sender address
          to: "j.haering@enval.de", // list of receivers
          subject: "Kontaktformular Webseite", // Subject line
          html: getHtml(body), // html body
        });
        return true
    } catch (err) {
      return false
    }
  
  }


} 



