const express = require("express");
const router = express.Router();

router.get("/home", (req, res, next) => {
  res.send({ message: "Hello MERN" });
});

module.exports = router;
