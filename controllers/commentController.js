const Comment = require('../models/commentModel');

const commentController = {
    async createComment(req, res) {
        const { postId, userId, comment } = req.body;
        try {
            const newComment = await Comment.create(postId, userId, comment);
            res.status(201).json(newComment);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create comment' });
        }
    },

    async getCommentById(req, res) {
        const { id } = req.params;
        try {
            const comment = await Comment.findById(id);
            if (comment) {
                res.status(200).json(comment);
            } else {
                res.status(404).json({ error: 'Comment not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to get comment' });
        }
    },

    // Add other actions as needed
};

module.exports = commentController;
