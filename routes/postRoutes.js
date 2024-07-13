const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.post('/posts', postController.createPost);
router.get('/posts/:id', postController.getPostById);

// Add other routes as needed

module.exports = router;
