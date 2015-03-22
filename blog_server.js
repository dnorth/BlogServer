// set up ====================================================
var express = require('express');
var app = express();
var port = 9005;
var db = require('./config/database');
//var bodyParser = require('body-parser');

// configuration =============================================
app.use('/', express.static('./public'));

// routes ====================================================
require('./app/routes.js')(app, db);

// listen ====================================================
app.listen(port);
console.log("App listening on port: " + port);