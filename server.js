//Require
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');

var app = express();

// port
var port = process.env.PORT || 3000;
var mongoDBURI = process.env.MONGODB_URI || 'mongodb://localhost/dpla-app';

// Database
mongoose.connect(mongoDBURI);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to mongoDB');
});

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

app.listen(port, function() {
  console.log('Dpla app is listening on port: ' + port);
});
