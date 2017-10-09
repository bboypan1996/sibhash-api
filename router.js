const koa = require('koa'),
    router = new require('koa-router')(),
    usersRouter = require('./Users/router'),
    coinsRouter = require('./Coins/router');

module.exports.setup = (app) => {
    router.get('/', (ctx, next) => {
        ctx.body = 'Hello world!';
    });
    
    app.use(router.routes());
    app.use(usersRouter.routes());
    app.use(coinsRouter.routes());
};