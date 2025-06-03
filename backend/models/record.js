const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
  // Define your schema based on your Excel data structure
  name: String,
  value: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Record', recordSchema);
