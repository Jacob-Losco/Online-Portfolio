const express = require('express');
const router = express.Router();
const path = require('path');
const getIndexData = require('../database/getIndexData.js')

let aboutParagraph = "";
getIndexData.then((res) => {
  aboutParagraph = res;
})

router.get("/", (req, res) => {
  res.render(path.join(__dirname + "../../../frontend/views/index.ejs"), {
    aboutText: aboutParagraph
  });
});

router.use("/projects", require("./projectRoute.js"));
router.use("/resume", require("./resumeRoute.js"));
router.use("/contact", require("./contactRoute.js"));

module.exports = router;