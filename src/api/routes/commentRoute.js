// src/api/routes/commentRoute.js
const commentController = require('../controllers/commentController');

// Exporte la fonction anonyme
module.exports = (app) => {
  app.route('/posts/:post_id/comments')
  .get(commentController.list_all_comments_from_a_post)
  .post(commentController.create_a_comment);

  app.route('/comments/:comment_id') // req.params.comment_id
  .get(commentController.get_a_comment)
  .put(commentController.update_a_comment)
  .delete(commentController.delete_a_comment);
}
