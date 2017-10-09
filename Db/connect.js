const mongoose = require('mongoose'),
    autoIncrement = require('mongoose-auto-increment');

const connect = mongoose.connect('mongodb://localhost/sibhash');
autoIncrement.initialize(connect);

module.exports = connect;