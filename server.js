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

//reservations

var tables = [
    {   name: "tom",
        phone: "1234567890",
        email: "tom@tom.com",
        customerID: 1},
];

//Routes
// =============================================================


// Basic route that sends the user first to the AJAX Page
app.get('/', function (req, res) {
console.log('home page requested');
res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/tables', function (req, res) {
console.log('tables page requested');
res.sendFile(path.join(__dirname, 'tables.html'));
});

app.get('/reserve', function (req, res) {
    console.log('reserve page requested');
    res.sendFile(path.join(__dirname, 'app/public/reserve.html'));
});

app.get('/api/tables', (req, res) => {
    res.json(tables.slice(0, 4));
});

app.get('/api/waitlist', (req, res) => {
    res.json(tables.slice(4));
});

app.post('/api/reserve', function (req, res) {
    console.log('reserve request submitted');
    console.log(req.body);

    var newReservation = req.body;

    tables.push(newReservation);
    // TODO true || false?
    res.json(true)
});

app.listen(PORT, () => {
    console.log("listening on ", PORT)
});



// var newReservation = req.body;
//
// tables.push(newReservation);
//
// console.log(tables);

