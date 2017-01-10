//Require
var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

//Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// var favoritesController = require('./controllers/FavoritesController.js');
// app.use('/favorites', favoritesController);
//
// var sessionsController = require('./controllers/SessionsController.js');
// app.use('/sessions', sessionsController);
//
// var usersController = require('./controllers/UsersController.js');
// app.use('/users', usersController);

mongoose.connect('mongodb://localhost:27017/dpla-app');
mongoose.connection.once('open', function() {
  console.log('Connected to mongoD');
});

app.listen(3000, function() {
  console.log('Dpla app is listening');
});
