const express = require('express');
const router = express.Router();
const path = require('path');

router.use(express.urlencoded({extended: true}));

router.get("/", (req, res) => {
  res.render(path.join(__dirname + "/../dist/contact.ejs"), {
    contacted: ""
  });
});

router.post("/submit", (req, res) => {
  res.render(path.join(__dirname + "/../dist/contact.ejs"), {
    contacted: "Message was sent! Thank you!"
  });

  //code for handling submitted data
});

module.exports = router;
