// src/api/models/postModel.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let postSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: "le contenu est requis"
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Post', postSchema);

module.exports = mongoose.model('Post');
