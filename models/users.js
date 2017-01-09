var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {type: String},
  password: {type: String},
  favoritesArray: []
});

var User = mongoose.model('User', userSchema);

module.exports = User;
