const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    imageUrl: {
        type:String,
        required: true,
        validate: [/^https?:\/\//i, 'invalid url image']
    },
    description: {
        type: String,
        required: true,
        maxlength: 50,
    }
})

const accessory = mongoose.model('Accessory', 'accessorySchema')