const joi = require('joi');

module.exports.createCoinsValidator = {
    type: 'json',
    options: {
        allowUnknownBody: false
    },
    body: {
        name: joi.string().required(),
        algorithm: joi.string().required(),
        price: joi.number().required(),
        maintanance: {
            electricity: joi.number().required(),
            services: joi.number().required()
        },
        pool: {
            url: joi.string().uri().required(),
            worker: joi.string().required(),
            password: joi.string().required()
        },
        period: joi.number().integer().required()
    }
}

module.exports.updateCoinsValidator = {
    type: 'json',
    options: {
        allowUnknownBody: false
    },
    body: {
        price: joi.number().optional(),
        maintanance: {
            electricity: joi.number().optional(),
            services: joi.number().optional()
        },
        pool: {
            url: joi.string().uri().optional(),
            worker: joi.string().optional(),
            password: joi.string().optional()
        },
        period: joi.number().integer().optional(),
        status: joi.string().optional()
    }
}

module.exports.idCoinsValidator = {
    type: 'json',
    options: {
        allowUnknownParams: false
    },
    params: {
        id: joi.string().required()
    }
}