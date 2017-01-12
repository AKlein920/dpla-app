var express = require('express');
router = express.Router();
var User = require('../models/users.js');

router.get('/new', function(req, res){
  res.send('new session');
});

router.post('/', function(req, res){
  User.findOne({userName: req.body.username}, function(err, foundUser){
    if(req.body.password == foundUser.userPassword){
      console.log(foundUser);
      req.session.currentuser = foundUser;
      res.redirect('/');
    } else {
      res.send('wrong password');
      console.log('wrong password');
      console.log(req.body.password);
      console.log(foundUser.userPassword);
      console.log(foundUser);
    }
  });
});

router.delete('/', function(req, res){
  req.session.destroy(function(){
    console.log('singing out');
    res.send('signing out');
  })
})



module.exports = router;
