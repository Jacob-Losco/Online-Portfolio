const express = require('express');
const router = express.Router();
const path = require('path');
const getIndexData = require('../static/src/database/getIndexData.js')

let aboutParagraph = "";
getIndexData.then((res) => {
  aboutParagraph = res;
})

router.get("/", (req, res) => {
  res.render(path.join(__dirname + "/../dist/index.ejs"), {
    aboutText: aboutParagraph
  });
});

router.use("/projects", require("./projectRoute.js"));
router.use("/contact", require("./contactRoute.js"));

module.exports = router;