var express = require('express');
router = express.Router();
var User = require('../models/users.js');

router.get('/new', function(req, res){
  res.send('new user');
});

router.post('/', function(req, res){
  User.create(req.body, function(err, createdUser){
    console.log('creating user');
    res.redirect('/');
  });
});

module.exports = router;
