const pool = require('../db');

const Post = {
    async create(userId, title, content) {
        const result = await pool.query(
            'INSERT INTO posts (user_id, title, content) VALUES ($1, $2, $3) RETURNING *',
            [userId, title, content]
        );
        return result.rows[0];
    },

    async findById(id) {
        const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
        return result.rows[0];
    },

    // Add other methods as needed
};

module.exports = Post;
