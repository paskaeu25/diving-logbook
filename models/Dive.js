const mongoose = require('mongoose');

const DiveSchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
  depth: {
    type: Number,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Dive', DiveSchema);
