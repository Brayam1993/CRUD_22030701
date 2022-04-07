var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    fullname: String,
    age: Number,
    username: String,
    password: Number    
});

var Mgdb = module.exports = mongoose.model('user_mgdb', userSchema);

module.exports.get = function (callback, limit) {
    Mgdb.find(callback).limit(limit);
};