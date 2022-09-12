const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/:nimi", (req, res) => {
  res.send("Tere " + req.params.nimi + req.params.nimi + "!")
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);