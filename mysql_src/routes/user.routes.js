const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

// Create a new mysql user
router.post('/', userController.create);

module.exports = router
