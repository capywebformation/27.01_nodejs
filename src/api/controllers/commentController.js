// src/api/controllers/commentController.js
const mongoose = require('mongoose');
const Comment = require('../models/commentModel');

// /posts/:post_id/comments
exports.list_all_comments_from_a_post = (req, res) => {
  Comment.find({post_id: req.params.post_id}, (error, comments) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."})
    }
    else{
      res.status(200);
      res.json(comments);
    }
  })
}

// req.params.post_id = 12345

// req.body = {
//   name: "toto",
//   message: "bonjour"
// }
exports.create_a_comment = (req, res) => {
  let new_comment = new Comment(req.body);
  // new_comment = {
  //   __id: "sdjoisdjfiosdf",
  //   name: "toto",
  //   message: "bonjour"
  // }
  new_comment.post_id = req.params.post_id;
  // new_comment = {
  //   __id: "sdjoisdjfiosdf",
  //   name: "toto",
  //   message: "bonjour",
  //   post_id: "12345"
  // }

  try {
    new_comment.save((error, comment) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Il manque des infos"});
      }
      else{
        res.status(201);
        res.json(comment)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.get_a_comment = (req, res) => {
  try {
    Comment.findById(req.params.comment_id, (error, comment) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(comment)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.update_a_comment = (req, res) => {
  try {
    Comment.findByIdAndUpdate(req.params.comment_id, req.body, {new:true}, (error, comment) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json(comment)
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}

exports.delete_a_comment = (req, res) => {
  try {
    Comment.findByIdAndRemove(req.params.comment_id, (error) => {
      if(error){
        res.status(400);
        console.log(error);
        res.json({message: "Id introuvable"});
      }
      else{
        res.status(200);
        res.json({message: "Commentaire supprimé"})
      }
    })
  } catch (e) {
    res.status(500);
    console.log(e);
    res.json({message: "Erreur serveur"})
  }
}
