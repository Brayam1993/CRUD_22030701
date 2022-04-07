const express = require('express');
const router = express.Router();

const Posts = require('../models/user.model.js');

// Get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await User.find();
        if(!posts) throw Error('No Items');
        res.status(200).json(posts);
    }catch(err) {
        res.status(400).json({mesg: err})
    }
});

// Post new user in mongodb
router.post(userController.new);

module.exports = router;