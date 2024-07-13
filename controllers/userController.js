const User = require('../models/userModel');

const userController = {
    async createUser(req, res) {
        const { username, email, password } = req.body;
        try {
            const user = await User.create(username, email, password);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    },

    async getUserById(req, res) {
        const { id } = req.params;
        try {
            const user = await User.findById(id);
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to get user' });
        }
    },

    // Add other actions as needed
};

module.exports = userController;
