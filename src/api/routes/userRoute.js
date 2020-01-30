// src/api/routes/userRoute.js
const userController = require('../controllers/userController');

// Exporte la fonction anonyme
module.exports = (app) => {
  app.post('/users/register', userController.user_register);
  app.post('/users/login', userController.user_login);
}
