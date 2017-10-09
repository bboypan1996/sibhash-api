const koa = require('koa'),
    router = new require('koa-router')(),
    controller = require('./controller'),
    validator = require('./validator'),
    koaValidate = require('koa-joi-validate');

router.post('/registration', koaValidate(validator.checkRegistrationData), controller.registration);
router.get('/users', controller.getUsers);

module.exports = router;