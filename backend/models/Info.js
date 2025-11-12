const mongoose = require('mongoose');

const infoSchema = new mongoose.Schema({
  section: String,
  content: String
});

module.exports = mongoose.model('Info', infoSchema);
