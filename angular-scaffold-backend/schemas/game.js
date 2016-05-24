var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
  isbn: {
    type: String,
    unique: true
  },
  rating : String,
  title : String,
  developer: String,
});

module.exports = mongoose.model('Game', GameSchema);
