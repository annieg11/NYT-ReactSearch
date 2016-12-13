// Include Server Dependencies
var express = require('express');
var mongoose = require('mongoose');
var app = express();

var PORT = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));
app.listen(PORT, function() {
  console.log('App running on port 3000!');
});
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

