const express = require('express');
const router = express.Router();
const path = require('path');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
router.use(express.urlencoded({extended: true}));

router.get("/", (req, res) => {
  res.render(path.join(__dirname + "../../../frontend/views/contact.ejs"), {
    contacted: ""
  });
});

router.post("/submit", (req, res) => {
  const msg = {
    to: 'jlosco2000@gmail.com',
    from: req.body.email,
    subject: req.body.name + ": " + req.body.reason,
    text: req.body.message,
    html: '<strong>Message from Online Portfolio:</strong><br/><p>' + req.body.message + "</p>",
  };
  sgMail.send(msg);
  res.render(path.join(__dirname + "/../views/contact.ejs"), {
    contacted: "Message was sent! Thank you!"
  });
});

module.exports = router;