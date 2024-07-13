const express = require('express');
const commentController = require('../controllers/commentController');

const router = express.Router();

router.post('/comments', commentController.createComment);
router.get('/comments/:id', commentController.getCommentById);

// Add other routes as needed

module.exports = router;
