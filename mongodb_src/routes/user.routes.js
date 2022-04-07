const express = require('express');
const routermongodb = express.Router();
const userControllerMongodb = require('../controllers/user.controller');

// Create a new Mongodb user
routermongodb.post(userControllerMongodb.new);