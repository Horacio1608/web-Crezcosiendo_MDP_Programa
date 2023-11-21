const { check } = require('express-validator');
const { validateResult } = require('../helper/validateHelper.js');

const valProduct = [
    check('name')
        .exists().withMessage('El nombre es requerido')
        .not().isEmpty().withMessage('LLene el nombre del producto')
        .isAlphanumeric().withMessage('Nombre alfanumerico'),
    check('description')
        .exists().withMessage('la descripcion es requerida')
        .not().isEmpty().withMessage('Complete la descripcion'),
    check('price')
        .exists().withMessage('El precio es requerido')
        .not().isEmpty()
        .isNumeric().withMessage('el precio es numerico con 2 decimales'),
    check('available')
        .exists().withMessage('Disponibilidad es requerida'),
    check('image')
        .exists()
        .not().isEmpty().withMessage('Imagen requerida'),
    validateResult,
];

module.exports = valProduct;

