// Include Server Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');

var Articles = require('./models/articles.js');
// var helpers = require('../utils/helpers');
var app = express();

var PORT = process.env.PORT || 3000;
// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use('/', express.static(__dirname + '/public'));

// -------------------------------------------------

//MongoDB Configuration configuration (Change this URL to your own DB)
//mongoose.connect('mongodb://localhost/nytreact');
mongoose.connect('mongodb://localhost/nytDb');
var db = mongoose.connection;

db.on('error', function (err) {
 console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Mongoose connection successful.');
});

// Main Route. This route will redirect to our rendered React application
app.get('/', function(req, res){
  res.sendFile('./public/index.html');
})

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get('/api/', function(req, res) {

  // We will find all the records, sort it in descending order, then limit the records to 5
  // History.find({}).sort([['date', 'descending']]).limit(5)
  Articles.find({}).sort([['date', 'descending']]).limit(5)
    .exec(function(err, doc){

      if(err){
        console.log(err);
      }
      else {
        res.json(doc);
      }
    })
});

// This is the route we will send POST requests to save each search.
app.post('/api/', function(req, res){
//  var newSearch = new History(req.body);
  var newSearch = new Articles(req.body);
  console.log("BODY: " + req.body.topic);

  // Here we'll save the location based on the JSON input. 
  // We'll use Date.now() to always get the current date time
  // History.create({"location": req.body.location, "date": Date.now()}, function(err){
  Articles.create({"topic": req.body.topic, "date": Date.now(), "url": req.body.url}, function(err){
    if(err){
      console.log(err);
    }
    else {
      res.json("Saved Search");
    }
  })
});


app.listen(PORT, function() {
  console.log('App running on port 3000!');
});