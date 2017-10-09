const mongoose = require('mongoose');

module.exports = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    algorithm: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    maintanance: {
        electricity: {
            type: Number,
            required: true
        },
        services: {
            type: Number,
            required: true
        }
    },
    pool: {
        url: {
            type: String,
            required: true
        },
        worker: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    period: {
        type: Number,
        default: 365
    },
    statue: {
        type: String,
        default: 'active'
    }
});
