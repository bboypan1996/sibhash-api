const koa = require('koa'),
    crypto = require('crypto'),
    Users = require('../Db/models').Users;


module.exports.registration = async (ctx, next) => {
    try{
        if(ctx.request.body.password !== ctx.request.body.passwordConfirm){
            throw new Error('Field password not equal passwordConfirm');
        }
        let user = new Users(ctx.request.body);
        user.password = crypto.createHmac('sha256', user.password).update(user.password).digest('hex');
        user = await user.save();
        ctx.status = 200;
        ctx.body = {
            error: false,
            message: user
        };
    }
    catch(e){
        ctx.status = 400;
        ctx.body = {
            error: true,
            message: e.message
        };
    }
    
}
module.exports.getUsers = async (ctx, next) => {
    try{
        let users = await Users.find({
        }).select('name');
        ctx.body = users;
    }
    catch(e){

    }
}