const { check } = require('express-validator');
const { validateResult } = require('../helper/validateHelper.js');

const valOrder = [
    check('name')
        .exists().withMessage('El nombre es requerido')
        .not().isEmpty().withMessage('Complete el nombre')
        .isAlphanumeric().withMessage('Nombre alfanumerico'),
    check('email')
        .exists().withMessage('El email es requerido')
        .not().isEmpty().withMessage('Complete el email')
        .isEmail().withMessage('Ingrese un correo electrónico válido'),
    check('number')
        .exists().withMessage('El telefono es requerido')
        .not().isEmpty().withMessage('Complete el telefono')
        .isNumeric().withMessage('El telefono es numerico'),
    check('message')
        .exists().withMessage('El mensaje es requerido')
        .not().isEmpty().withMessage('Complete el mensaje'),
    check('pending')
        .exists().withMessage('estado es requerido'),
    /*check('idproduct')
        .exists()
        .not().isEmpty().withMessage('Producto requerido')
        .isNumeric().withMessage('id producto es numerico'),*/
    validateResult,
];

module.exports = valOrder;

