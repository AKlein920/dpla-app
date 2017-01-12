var express = require('express');
router = express.Router();
var User = require('../models/users.js');

router.get('/new', function(req, res){
  res.send('new user');
});

//NEW USER ROUTE
router.post('/', function(req, res){
  User.create(req.body, function(err, createdUser){
    console.log(createdUser);
    res.redirect('/');
  });
});

//ADD FAVORITE TO USER ROUTE
router.put('/favorites/:id', function(req, res){
  console.log('attempting to add fav');
  User.findByIdAndUpdate(req.params.id, req.body, function(err, foundUser){
    console.log(foundUser);
    console.log(req.body);
  });
});

module.exports = router;
