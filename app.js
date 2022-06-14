const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

const routes = require("./routes");

app.use("/", routes);

const port = process.env.SVR_PORT;
if (port == null || port == "") {
  port = 8080;
}

app.listen(port, () => {
  console.log("Listening on port: " + port);
});
