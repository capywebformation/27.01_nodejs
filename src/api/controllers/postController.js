// src/api/controllers/postController.js
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const Post = require('../models/postModel');
const textApiProvider = require('../providers/textApiProvider');

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
  // fetch("https://www.randomtext.me/api/lorem")
  // .then(result => {
  //   return result.json();
  // })
  // .then(result => {
  //   console.log(result);
  // })

  const randomTextPromise = textApiProvider.getRandomText();

  randomTextPromise.then(result => {
    if(!new_post.content){
      new_post.content = result;
    }
  })
  .then(result => {
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
  })

}

exports.get_a_post = (req, res) => {
  try {
    Post.findById(req.params.post_id, (error, post) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(post)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.update_a_post = (req, res) => {
  try {
    Post.findByIdAndUpdate(req.params.post_id, req.body, {new:true}, (error, post) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(post)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.delete_a_post = (req, res) => {
  try {
    Post.findByIdAndRemove(req.params.post_id, (error) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json({message: "Article supprimé"})
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}
