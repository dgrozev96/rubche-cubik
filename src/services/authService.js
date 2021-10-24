const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createToken } = require('../utils/jwtUtils');
const { SECRET } = require('../constants');

const User = require('../models/User');


exports.register = function (username, password, repeatPassword) {
    //validate password
    // return bcrypt.hash(password, 10)
    // .then(hash => User.create({username, password: hash}))

    return User.create({ username, password })
}

exports.login = function (username, password) {
    return User.findByUsername(username)
        .then(user => Promise.all([user.validatePassword(password), user]))
        .then(([isValid, user]) => {
            if (isValid) {
                return user;
            } else {
                throw { message: 'Username or password are invalid' }
            }
        })
        .catch(err => {
            return null;
        })
}



