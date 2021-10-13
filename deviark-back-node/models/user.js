const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  colors: {
    type: [String],
    required: true
  }
});

module.exports = model('User', schema);
