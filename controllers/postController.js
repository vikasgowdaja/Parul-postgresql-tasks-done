const Post = require('../models/postModel');

const postController = {
    async createPost(req, res) {
        const { userId, title, content } = req.body;
        try {
            const post = await Post.create(userId, title, content);
            res.status(201).json(post);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create post' });
        }
    },

    async getPostById(req, res) {
        const { id } = req.params;
        try {
            const post = await Post.findById(id);
            if (post) {
                res.status(200).json(post);
            } else {
                res.status(404).json({ error: 'Post not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to get post' });
        }
    },

    // Add other actions as needed
};

module.exports = postController;
