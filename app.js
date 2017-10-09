const koa = require('koa'),
    config = require('config'),
    cors = require('koa2-cors'),
    router = require('./router'),
    bodyParser = require('koa-bodyparser'),
    session = require('koa-session'),
    cookieParser = require('koa-cookie-parser'),
    cookie = require('koa-cookie'),
    passport = require('./auth').passport;

const app = new koa();

const run = app => {

    app.use(cors());
    app.use(cookie.default());
    app.use(bodyParser());

    app.keys = ['secret'];
    app.use(session({}, app));


    router.setup(app);

    app.listen(config.get('SERVER.port'), () => {
        console.log('Application run on '+config.get('SERVER.port')+' port');
    });
    
    
}
if(module.parent){
	module.exports = run;
}
else{
	run(app);
}
