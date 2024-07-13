const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);

// Add other routes as needed

module.exports = router;
