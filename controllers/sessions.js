var express = require('express');
router = express.Router();
var User = require('../models/users.js');

router.get('/new', function(req, res){
  res.send('new session');
});

router.post('/', function(req, res){
  User.findOne({username: req.body.userName}, function(err, foundUser){
    if(req.body.password == foundUser.userPassword){
      console.log(foundUser);
      req.session.currentuser = foundUser;
      res.redirect('/');
    } else {
      res.send('wrong password');
      console.log('wrong password');
      console.log(req.body.password);
    }
  });
});



module.exports = router;
