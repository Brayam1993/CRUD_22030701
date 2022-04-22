const express = require('express');

const routermongodb = express.Router();
const userControllerMongodb = require('../controllers/user.controller');

// Create a new Mongodb user
routermongodb.route('/posts')
  .get(userControllerMongodb.index)
  .post(userControllerMongodb.new);

routermongodb.route('/posts/:posts_id')
  .get(userControllerMongodb.view)
  .put(userControllerMongodb.update)
  .delete(userControllerMongodb.delete);

module.exports = routermongodb;
