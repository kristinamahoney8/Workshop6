var bodyParser = require('body-parser');

// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();

var Util = require('./util');
var ReverseString = Util.reverseString;

app.use(bodyParser.text());

// You run the server from `server`, so `../client/build` is `server/../client/build`.
// '..' means "go up one directory", so this translates into `client/build`!
app.use(express.static('../client/build'));

// Handle POST /reverse [data]


// Defines what happens when it receives the `GET /` request


// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
