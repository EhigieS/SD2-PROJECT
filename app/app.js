

// Import express.js
const express = require("express");
const bodyParser = require('body-parser');
const bookingModel = require('./models/bookingModel');
// Create express app
var app = express();
//var express = require('express');

// Add static files location
app.use(express.static("static"));
app.use(express.static('app'));

//use pug templating engine
app.set('view engine', 'pug');
app.set('views', './app/views');
app.set('css', './css');
app.set('js', './js');
app.use(bodyParser.urlencoded({ extended: true }));

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

// contact us page
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Handling table booking form submission
app.post('/book-table', async (req, res) => {
  console.log('Received table booking request:', req.body);

  try {
    await bookingModel.bookTable(req.body.name, req.body.email, req.body.date, req.body.occasion, req.body.message);
    console.log('Table booked successfully!');
    res.send('Table booked successfully!');
  } catch (error) {
    console.error('Error booking table:', error);
    res.status(500).send(`Error booking table: ${error.message}`  );
  }
});

// Handling room booking form submission
app.post('/book-room', async (req, res) => {
  const { roomType, numNights, checkin, cust_name, cust_email, message } = req.body;

  try {
    await bookingModel.bookRoom(roomType, numNights, checkin, cust_name, cust_email, message);
    res.send('Room booked successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error booking room');
  }
});

// Create a route for testing the db
app.get("/hotel_restaurants", function(req, res) {

    sql = 'select * from table_booking';
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