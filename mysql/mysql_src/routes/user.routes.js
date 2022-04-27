const express = require('express');

const router = express.Router();
const userController = require('../controllers/user.controller');

// Create a new mysql user
router.post('/', userController.create);

// Retrieve all mysql users
router.get('/', userController.findAll);

// Retrieve a single employee with id
router.get('/:id', userController.findById);

// Update a employee with id
router.put('/:id', userController.update);

// Delete a employee with id
router.delete('/:id', userController.delete);

module.exports = router;
