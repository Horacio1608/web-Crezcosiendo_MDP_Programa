//Routers para consulta de productos cargados por el admin

const express = require('express');
const router = express.Router();
const clientProducts = require('../controller/products.controller');


router.get('/',clientProducts);//obtengo productos


module.exports = router;