//se validan con joi la carga de productos

const Joi = require('joi');
const validateRequest = require('../middleware/validateRequest');

const validateProduct = (req, res, next) => {
    const schema = Joi.object({
        nameproduct: Joi.string().required().message({
           // 'string.empty': 'Complete el nombre del Producto',
           // 'any.required': 'Ingrese el Nombre del Producto',
        }),
        // Agrega aquí los otros campos que necesitas validar
    });

    validateRequest(req, res,next, schema)
}

module.exports = validateProduct;
