// Include Server Dependencies
var express = require('express');
var mongoose = require('mongoose');
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



app.listen(PORT, function() {
  console.log('App running on port 3000!');
});