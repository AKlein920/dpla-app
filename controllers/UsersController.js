var express = require('express');
var router = express.Router();

var User = require('../models/users.js');

//Create new user route
router.post('/', function(req, res) {
  User.create(req.body, function(err, createdUser) {
    res.redirect('/sessions/new');
  });
});

router.get('')

module.exports = router;
