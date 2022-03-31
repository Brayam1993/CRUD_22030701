const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: String,
    age: Number,
    username: String,
    password: Number    
});

module.exports = mongoose.model('User', userSchema);
