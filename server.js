//Require
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

var app = express();

app.use(session({
  secret: "feedmeseymour",
  resave: false,
  saveUninitialized: false
}));

var User = require('./models/users.js');


//Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

var favoritesController = require('./controllers/FavoritesController.js');
app.use('/favorites', favoritesController);

var sessionsController = require('./controllers/sessions.js');
app.use('/sessions', sessionsController);

var usersController = require('./controllers/users.js');
app.use('/users', usersController);

app.get('/', function(req, res){
  res.send('Not Sure', {
    currentUser: req.session.currentuser
  });
});

app.get('/app', function(req, res){
  if(req.session.currentuser){
    res.send('the party');
  } else {
    res.send('no party');
  }
});

mongoose.connect('mongodb://localhost:27017/dpla-app');
mongoose.connection.once('open', function() {
  console.log('Connected to mongoD');
});

app.listen(3000, function() {
  console.log('Dpla app is listening');
});
