// src/api/routes/postRoute.js
const postController = require('../controllers/postController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route('/posts')
  .get(postController.list_all_posts)
  .post(jwtMiddleware.verify_token, postController.create_a_post);

  app.route('/posts/:post_id') // req.params.post_id
  .get(postController.get_a_post)
  .put(postController.update_a_post)
  .delete(postController.delete_a_post);
}
