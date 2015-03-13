const express = require('express');
const app = express();

app.get('/', function(req,res){
  res.send('hello Express!');
});

module.exports = app;
