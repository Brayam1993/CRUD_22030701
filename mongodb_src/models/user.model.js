const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fullname: String,
  age: Number,
  username: String,
  password: Number,
});

const user_mgdb = module.exports = mongoose.model('user_mgdb', userSchema);

module.exports.get = function (callback, limit) {
  user_mgdb.find(callback).limit(limit);
};
