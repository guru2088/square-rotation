'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = process.env.PORT || 1000;
const HOST = '0.0.0.0';

const CLIENT_BUILD_PATH = path.join(__dirname, '../client/build');

const app = express();

app.use(express.static(CLIENT_BUILD_PATH));

app.get('/', function(req, res, next) {
  res.send({
    value: "Web server working",
    status: "success",
    statusCode: 200
  })
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
