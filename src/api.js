const express = require('express');
const serverless = require('serverless-http')

const app = express();
const router = express.Router()

router.get('/',(req,res) => {
  if(req.query.nimi != undefined) {
    res.send('Tere, ' + req.query.nimi + "!");
  } 
})

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
