var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  userName: {type: String},
  userPassword: {type: String},
  favoritesArray: [{type: Object}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;
