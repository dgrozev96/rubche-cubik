const mongoose = require('mongoose');

const cubeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 100,
    },
    imageUrl: {
        type:String,
        required: true,
        validate: [/^https?:\/\//i, 'invalid image url'],
        // message: "Image Url is invalid"

    },
    difficulty: {
        type: Number,
        required: true,
        min: 1,
        max: 5,

    },
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory',
        }
    ]


})

const Cube = mongoose.model('Cube', cubeSchema)

module.exports = Cube;