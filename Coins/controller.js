const koa = require('koa'),
    Coins = require('../Db/models').Coins;

module.exports.createCoins = async (ctx) => {
    try{
        let coin = new Coins(ctx.request.body);
        coin = await coin.save();
        return ctx.body = {
            error: false,
            message: coin
        }
    }
    catch(e){
        return ctx.body = {
            error: true,
            message: e.message
        }
    }
    
    
}

module.exports.getCoins = async (ctx) => {
    try{
        let coins = await Coins.find();
        return ctx.body = {
            error: false,
            message: coins
        }
    }
    catch(e){
        return ctx.body = {
            error: true,
            message: e.message
        }
    }
}

module.exports.getCoinsById = async (ctx) => {
    try{
        let id = ctx.params.id;
        let coins = await Coins.findById(id);
        return ctx.body = {
            error: false,
            message: coins
        }
    }
    catch(e){
        return ctx.body = {
            error: true,
            message: e.message
        }
    }
}

module.exports.updateCoins = async (ctx) => {
    try{
        let id = ctx.params.id;
        let coins = await Coins.findById(id);
        coins.set(ctx.request.body);
        coins = await coins.save();
        return ctx.body = {
            error: false,
            message: coins
        }
    }
    catch(e){
        return ctx.body = {
            error: true,
            message: e.message
        }
    }
}