const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    fullname: String,
    age: Number,
    username: String,
    password: Number    
});

module.exports = model('User', userSchema);
