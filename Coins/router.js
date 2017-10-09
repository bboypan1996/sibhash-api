const koa = require('koa'),
    router = new require('koa-router')(),
    controller = require('./controller'),
    validator = require('./validator'),
    koaValidate = require('koa-joi-validate');


router.get('/coins', controller.getCoins);
router.get('/coins/:id', koaValidate(validator.idCoinsValidator), controller.getCoinsById);

router.post('/coins', koaValidate(validator.createCoinsValidator), controller.createCoins);

router.put('/coins/:id', koaValidate(validator.idCoinsValidator), koaValidate(validator.updateCoinsValidator), controller.updateCoins);


module.exports = router;