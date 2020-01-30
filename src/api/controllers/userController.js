// src/api/controllers/userController.js
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/userModel');

exports.user_register = (req, res) => {
  let new_user = new User(req.body);

  try{
    new_user.save((error, user) => {
      if(error){
        res.status(400);
        res.json({message: "Il manque des infos"});
      }
      else{
        res.status(201);
        user = user.toObject();
        delete user.password
        // user.password = undefined;
        res.json(user)
        // res.json({email: user.email})
        // res.json({message: "Utilisateur crée"})
      }
    })
  }
  catch(e){
    res.status(500);
    res.json({message: "Erreur serveur."});
  }
}


exports.user_login = (req, res) => {
  let {body} = req;
  // let body = req.body;
  // body = {
  //   email: jacques,
  //   password: toto
  // }

  User.findOne(body, (mongooseError, user) => {
    jwt.sign({email: user.email}, process.env.JWT_KEY, {expiresIn: "10m"}, (jwtError, token) => {
      if(jwtError){
        console.log(jwtError);
        res.status(500);
        res.json({message: "Erreur serveur"});
      }
      else {
        res.status(200);
        res.json({token});
      }
    })
  })
}
