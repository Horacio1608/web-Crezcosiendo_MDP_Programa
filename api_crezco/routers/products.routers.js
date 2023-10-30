//Routers para consulta de productos cargados por el admin

const express = require('express');
const productsRouter = express.Router();
const clientProducts = require('../controller/products.controller');

productsRouter.get('/',clientProducts);//productos para el cliente

module.exports = productsRouter;