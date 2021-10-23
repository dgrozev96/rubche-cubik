const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: [3, 'Username cannot be less then 3 chars']
    },
    password: {
        type: String,
        minlength: [6, 'your password should be at least 6 chars'],
        required: true,
    }
})

userSchema.pre('save', function(next){
    console.log(this);
    bcrypt.hash(this.password,10)
    .then(hash => {
        this.password = hash;
        next();
    })
    
}
)

userSchema.static('findByUsername', function(username) {
    return this.findOne({username});
})
const User = mongoose.model('User', userSchema);

module.exports = User;