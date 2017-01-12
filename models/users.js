var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userName: {type: String},
  userPassword: {type: String},
  favoritesArray: []
});

var User = mongoose.model('User', userSchema);

module.exports = User;
