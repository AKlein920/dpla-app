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
router.put('/favorites', function(req, res){
  console.log('attempting to add fav');
  User.findById(req.session.currentuser._id, function(err, foundUser){
    console.log(req.body.item);
    foundUser.favoritesArray.push(req.body.item);
    foundUser.save(function(err, savedUser){
      console.log(foundUser);
    });
  });
});

module.exports = router;
