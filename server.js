// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets us express app

var app = express ();
var PORT = 3000;

//parsing data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application.vnd.api+json'}));

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get(‘/’, function (req, res) {
console.log(‘home page requested’);
res.sendFile(path.join(__dirname, ‘app/public/index.html’));
});

app.get(‘/tables’, function (req, res) {
console.log(‘tables page requested’);
res.sendFile(path.join(__dirname, ‘app/public/tables.html’));
});

app.get(‘/reserve’, function (req, res) {
console.log(‘reserve page requested’);
res.sendFile(path.join(__dirname, ‘app/public/reserve.html’));
});