const { check } = require('express-validator');
const { validateResult } = require('../helper/validateHelper.js');

const valProduct = [
    check('disponible')
        .exists().withMessage('Disponibilidad es requerida'),
    check('titulo')
        .exists().withMessage('El titulo es requerida')
        .not().isEmpty().withMessage('Complete el titulo')
        .isString().withMessage('El titulo debe ser una cadena de texto'),
    check('precio')
        .exists().withMessage('El precio es requerido')
        .not().isEmpty()
        .isNumeric().withMessage('el precio es numerico con 2 decimales'),
    /*check('imagen1')
        .exists()
        .not().isEmpty().withMessage('Imagen 1 requerida'),
    check('imagen2')
        .exists()
        .not().isEmpty().withMessage('Imagen 2 requerida'),
    check('imagen3')
        .exists()
        .not().isEmpty().withMessage('Imagen 3 requerida'),
    check('imagen4')
        .exists()
        .not().isEmpty().withMessage('Imagen 4 requerida'),*/
    check('descripcion')
        .exists().withMessage('La descripción es requerida')
        .not().isEmpty().withMessage('Complete la descripción')
        .isString().withMessage('La descripción debe ser una cadena de texto'),
    
    
    validateResult,
];

module.exports = valProduct;

