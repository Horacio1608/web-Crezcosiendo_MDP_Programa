//Routers para uso exclusivo del administrador

const express = require('express');
const router = express.Router();
const {allProducts,createProducts,deleteProducts,updateProducts,allOrder,createOrder,deleteOrder,updateOrder} = require('../controller/admin.controller');
const valProduct = require('../validators/productValidators');
const valOrder = require('../validators/orderValidators');


// Rutas para Productos
router.post('/products', valProduct, createProducts); // Crea productos el admin
router.put('/products', updateProducts); // Modifica productos el admin
router.get('/products', allProducts); // Consulta productos el admin
router.delete('/products', deleteProducts); // Borra productos el admin

// Rutas para Pedidos
router.post('/order', valOrder, createOrder); // Crea pedidos el admin
router.put('/order', updateOrder); // Modifica pedidos el admin
router.get('/order', allOrder); // Consulta pedidos el admin
router.delete('/order', deleteOrder); // Borra pedidos el admin

module.exports = router;


