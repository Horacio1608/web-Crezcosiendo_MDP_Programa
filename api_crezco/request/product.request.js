//se validan con joi la carga de productos

const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest');

const validateProduct = (req, resp, next) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().precision(2).required(),
        available: Joi.boolean(),
        image: Joi.string().uri(),
    });

    validateRequest(req, resp, (error) => {
        if (error) {
            resp.status(400).json(error);
        } else {
            next();
        }
    }, schema);
}

module.exports = validateProduct;