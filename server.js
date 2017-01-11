//Require dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Port
var port = process.env.PORT || 3000;
var mongoDBURI = process.env.MONGODB_URI ||
'mongodb://localhost:27017/dpla-app';

//Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

//Require controller & controller middleware
var favoritesController = require('./controllers/FavoritesController.js');
app.use('/favorites', favoritesController);

//Database
mongoose.connect(mongoDBURI);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongoD');
});

app.listen(port, function() {
  console.log('Dpla app is running on port: ' + port);
});
