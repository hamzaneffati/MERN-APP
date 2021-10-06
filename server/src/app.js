const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const v1 = require("./routes/v1");

const app = express();

// ----------- Middlewares ----------- //
app.use(logger("dev"));

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ----------- Routes ----------- //

app.use("/api/v1", v1);

// ----------- Public Images ----------- //
app.use(express.static("public"));

// ----------- Static Files ----------- //
app.use(express.static(path.join(__dirname, "../../client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client", "build", "index.html"));
});

// ----------- ERRORS ----------- //
app.use((req, res, next) => {
  //404 Not Found
  const err = new Error("404 Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const error = err.message || "Error processing your request";

  res.status(status).send({
    error,
  });
});

module.exports = app;
