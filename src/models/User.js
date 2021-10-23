const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'Username cannot be less then 3 chars']
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;