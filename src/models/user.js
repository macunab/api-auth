const { Schema, model } = require('mongoose');

const userSchema = Schema({
    _id: String,
    name: String,
    avatar: String,
    createAt: {
        type: String,
        default: new Date().toISOString()
    }
});

module.exports = model('users', userSchema);