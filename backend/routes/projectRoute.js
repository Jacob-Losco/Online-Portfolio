const express = require('express');
const router = express.Router();
const path = require('path');
const getProjectData = require("../database/getProjectData.js");

let projects = "nothing";
getProjectData.then((res) => {
  projects = res;
});

router.get("/", (req, res) => {
  res.render(path.join(__dirname + "../../../frontend/views/projects.ejs"),
    {
      projectData: projects
    });
});

module.exports = router;
