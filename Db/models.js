const db = require('./connect'),
    usersModel = require('../Users/model'),
    coinsModel = require('../Coins/model');

const Users = db.model('Users', usersModel);
const Coins = db.model('Coins', coinsModel);


module.exports = {
    Users: Users,
    Coins: Coins
}



