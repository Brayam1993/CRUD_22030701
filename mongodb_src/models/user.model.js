var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    fullname: String,
    age: Number,
    username: String,
    password: Number    
});

var user_mgdb = module.exports = mongoose.model('user_mgdb', userSchema);

module.exports.get = function (callback, limit) {
    user_mgdb.find(callback).limit(limit);
};