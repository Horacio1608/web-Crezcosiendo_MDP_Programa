const { check } = require('express-validator');
const { validateResult } = require('../helper/validateHelper');

const valProduct = [
    check('nameproduct')
    .exists().withMessage('El nombre es requerido')
    .not().isEmpty().withMessage('LLene el nombre del producto')
    .isAlphanumeric().withMessage('Nombre alfanumerico'),
    check('description').exists().not().isEmpty().withMessage('Descripcion es requerida'),
    check('price').exists().not().isEmpty().isNumeric().withMessage('Price is required and must be a numeric value'),
    check('available').exists().withMessage('Available is required'),
    check('image').exists().not().isEmpty().withMessage('Image is required and cannot be empty'),
    validateResult,
];

module.exports = valProduct;

