const joi = require('joi');

module.exports.checkRegistrationData = {
    type: 'json',
    options: {
        allowUnknownBody: false
    },
    body: {
        name: joi.string().required(),
        login: joi.string().required(),
        password: joi.string().required(),
        passwordConfirm: joi.string().required(),
        address: joi.string().required(),
        email: joi.string().email().required(),
        country: joi.string().required(),
    }
};
module.exports.checkLoginData = {
    type: 'json',
    options: {
        allowUnknownBody: false
    },
    body: {
        login: joi.string().required(),
        password: joi.string().required()
    }
};