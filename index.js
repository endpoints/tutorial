const port = process.env.PORT || '8080';
const host = process.env.HOST || '0.0.0.0';
const express = require('express');
const app = express();

app.listen(port, host);

app.use(require('./src'));

console.log('Server running on, %s:%d', host, port);
