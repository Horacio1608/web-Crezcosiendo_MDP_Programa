const { check } = require('express-validator');
const { validateResult } = require('../helper/validateHelper.js');

const valOrder = [
    check('clientname')
        .exists().withMessage('El nombre es requerido')
        .not().isEmpty().withMessage('Complete el nombre del producto')
        .isAlphanumeric().withMessage('Nombre alfanumerico'),
    check('email')
        .exists().withMessage('El email es requerido')
        .not().isEmpty().withMessage('Complete el email')
        .isEmail().withMessage('Ingrese un correo electrónico válido'),
    check('phone')
        .exists().withMessage('El telefono es requerido')
        .not().isEmpty().withMessage('Complete el telefono')
        .isNumeric().withMessage('El telefono es numerico'),
    check('detail')
        .exists().withMessage('El detalle es requerido')
        .not().isEmpty().withMessage('Complete el detalle'),
    check('pending')
        .exists().withMessage('estado es requerido'),
    /*check('idproduct')
        .exists()
        .not().isEmpty().withMessage('Producto requerido')
        .isNumeric().withMessage('id producto es numerico'),*/
    validateResult,
];

module.exports = valOrder;

