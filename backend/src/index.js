const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const errors = require("./utils/error");
const config = require("./config");
const github = require("./github/routes");

const app = express();
app.set("port", config.port);
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("<h1>Hello world!</h1>"));
app.use("/v1/github", github);
app.use(errors.notFound);

if (config.env === "development") {
  app.use(errors.developmentErrors);
}
app.use(errors.productionErrors);

app.listen(app.get("port"), () => console.log("Listening..."));
