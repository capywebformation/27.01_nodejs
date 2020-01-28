// src/api/controllers/postController.js
const mongoose = require('mongoose');
const Post = require('../models/postModel');

exports.list_all_posts = (req, res) => {
  Post.find({}, (error, posts) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(posts);
    }
  })
}

exports.create_a_post = (req, res) => {
  let new_post = new Post(req.body);

  try {
    new_post.save((error, post) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Il manque des infos"});
      }
      else{
        res.status(201);
        res.json(post)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}
