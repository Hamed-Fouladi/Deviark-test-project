const { Schema, model } = require('mongoose');

const schema = new Schema({
  color: {
    type: String,
    required: true,
  }
});

module.exports = model('Color', schema);