/* eslint-disable func-names */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullname: String,
  age: Number,
  username: String,
  password: Number,
});

module.exports = mongoose.model('user_mgdb', userSchema);
const userMgdb = module.exports;

module.exports.get = function (callback, limit) {
  userMgdb.find(callback).limit(limit);
};
