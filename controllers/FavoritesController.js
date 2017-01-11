var express = require('express');
var router = express.Router();
var Favorites = require('../models/favorites.js');

//INDEX ROUTE
router.get('/', function(req, res){
  Favorites.find({}, function(err, allFavorites){
    res.json(allFavorites);
  });
});

//NEW FAVORITE ROUTE
router.post('/', function(req, res){
  Favorites.create(req.body, function(err, createdFavorite){
    res.json(createdFavorite);
  })
})







module.exports = router;
