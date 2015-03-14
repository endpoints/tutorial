const express = require('express');
const app = express();

var Author = require('./modules/authors/controller');

app.get('/', Author.read());

module.exports = app;
