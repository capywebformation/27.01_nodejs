// src/api/models/commentModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let commentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: "le message est requis"
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  post_id: {
    type: String
  }
});

mongoose.model('Comment', commentSchema);

module.exports = mongoose.model('Comment');
