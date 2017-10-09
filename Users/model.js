const mongoose = require('mongoose');

module.exports = mongoose.Schema({
    name: String,
    login: {
        type: String,
        unique: true
    },
    password: String,
    address: String,
    email: {
        type: String
    },
    country: String,
    passport: String,
    image: String,
    hashrate: String,
    verification: {
        type: Boolean,
        default: false
    },
    banned: {
        type: Boolean,
        default: false
    },
    dateRegistration: {
        type: Date,
        default: new Date()
    },
    lastVisit: Date
});
