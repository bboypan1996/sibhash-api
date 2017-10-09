const 
    koa = require('koa'),
    passport = require('koa-passport'),
    localStrategy = require('passport-local').Strategy,
    crypto = require('crypto'),
    Users = require('./Db/models').Users;

passport.use(new localStrategy({
        usernameField: 'login',
        passwordField: 'password'
    }, (username, password, done) =>  {
    Users.find({
        login: username,
        password: crypto.createHmac('sha256', password).update(password).digest('hex')
    }).select('name login email verification banned')
    .then(user => {
        if(user.length == 1){
            return done(null, user[0])
        }  
        return done(null, false);
    }).catch(err => done(err));
}))

passport.serializeUser( (user, done) => {
    done(null, user)
});
  
passport.deserializeUser( (user, done) => {
    done(null, user)
});

const auth = (ctx) => {
    return passport.authenticate('local', async (err, user, info, status) => {
        if (user === false) {
            ctx.body = { error: true, message: 'Login fail' };
            ctx.throw(401);
        } 
        else {
            await ctx.login(user);
            ctx.body = { error: false, message: user };
            console.log(1, ctx.isAuthenticated());
            console.log(ctx.session);
        }
    })(ctx)
}

module.exports = {
    passport: passport,
    auth: auth 
}