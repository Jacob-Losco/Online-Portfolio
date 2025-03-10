const express = require('express');
const bodyParser = require("body-parser");
const routeController = require("./backend/routes/index.js");

const port = 8081;
const app = express();

app.use(bodyParser.json());
app.use(express.static("./frontend"));
app.use(routeController);

app.listen(port, () => console.log(`Online Portfolio running on port ${port}!`));
