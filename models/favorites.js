var mongoose = require('mongoose');

var favoritesSchema = mongoose.Schema({
  item: Object
});

var Favorite = mongoose.model('Favorite', favoritesSchema);

module.exports = Favorite;
