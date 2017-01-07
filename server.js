var express = require('express');
var mongoose = require('mongoose');
var app = express();


app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/dpla-app');

mongoose.connection.once('open', function() {
  console.log('Connected to mongoD');
});

app.listen(3000, function() {
  console.log('Dpla app is listening');
});
