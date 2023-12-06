

// Import express.js
const express = require("express");
const bodyParser = require('body-parser');
// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));

app.use(bodyParser.urlencoded({ extended: true }));
//use pug templating engine
app.set('view engine', 'pug');
app.set('views', './app/views');
app.set('stylesheet', '/css');

// Get the functions in the db.js file to use
const db = require('./services/db');

// Create a route for home - /
app.get("/", function(req, res) {
   res.render("index"); 
});

//create a root for events
app.get("/events", function(req, res) {
    res.render("events"); 
 });

 // about page
 app.get("/about", function(req, res){
    res.render("about");
 });

 // rooms and dining page
 app.get("/roomsanddining", function(req, res){
    res.render("roomsanddining");
 });

 // reservation page
 app.get('/reservation', (req, res) => {
    res.render('reservation');
  });
 
// menu page
 app.get('/menu', (req, res) => {
    res.render('menu');
  });

 // Handling table booking form submission
app.post('/book-table', (req, res) => {
  const { tableType, numPeople, date, cust_name, cust_email, message } = req.body;
  // Handle table booking data
  res.send(`Table booked: Type - ${tableType}, People - ${numPeople}, Date - ${date}, cust_name - ${cust_name}, Email - ${cust_email}, message - ${message}`);
});

// Handling room booking form submission
app.post('/book-room', (req, res) => {
  const { roomType, numNights, checkin, cust_name, cust_email, message } = req.body;
  // Handle room booking data
  res.send(`Room booked: Type - ${roomType}, Nights - ${numNights}, Check-in - ${checkin}, cust_name - ${cust_name}, Email - ${cust_email}, message - ${message}`);
});
// Create a route for testing the db
app.get("/hotel_restaurants", function(req, res) {
    // Assumes a table called test_table exists in your database
    sql = 'select * from hotel_restaurants';
    db.query(sql).then(results => {
        console.log(results);
        res.send(results)
    });
});

// Create a route for /goodbye
// Responds to a 'GET' request
app.get("/goodbye", function(req, res) {
    res.send("Goodbye world!");
});

// Create a dynamic route for /hello/<name>, where name is any value provided by user
// At the end of the URL
// Responds to a 'GET' request
app.get("/hello/:name", function(req, res) {
    // req.params contains any parameters in the request
    // We can examine it in the console for debugging purposes
    console.log(req.params);
    //  Retrieve the 'name' parameter and use it in a dynamically generated page
    res.send("Hello " + req.params.name);
});

// Start server on port 3000
app.listen(3000,function(){
    console.log(`Server running at http://127.0.0.1:3000/`);
});