const pool = require('../db');

const Comment = {
    async create(postId, userId, comment) {
        const result = await pool.query(
            'INSERT INTO comments (post_id, user_id, comment) VALUES ($1, $2, $3) RETURNING *',
            [postId, userId, comment]
        );
        return result.rows[0];
    },

    async findById(id) {
        const result = await pool.query('SELECT * FROM comments WHERE id = $1', [id]);
        return result.rows[0];
    },

    // Add other methods as needed
};

module.exports = Comment;
