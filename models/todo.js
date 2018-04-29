const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// INTIALIZING SCHEMA

let todoSchema = new Schema({
  description: {
    type: String,
    require: true
  },
  done: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Todo', todoSchema);
