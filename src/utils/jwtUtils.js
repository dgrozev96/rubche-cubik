const jwt = require('jsonwebtoken');

exports.jwtSign = function (payload, secret) {
    let promise = new Promise((resolve, reject) => {
        jwt.sign(payload, secret, function (err, token) {
            if (err) {
                reject(err)
            } else {
                resolve(token);
            }
        })
    })
    return promise;
}

exports.createToken = function createToken(user) {
    console.log(user);

    let payload = {
        _id: user.get('_id'),
        username: user.get('username')

    }
    return jwtSign(payload, SECRET)
}