//Routers para uso exclusivo del administrador

const express = require('express');
const router = express.Router();

const {allProducts,createProducts,deleteProducts,updateProducts,allOrder,createOrder,deleteOrder,updateOrder,updateContact} = require('../controller/admin.controller');
const valProduct = require('../validators/productValidators');
const valOrder = require('../validators/orderValidators');
const multerMiddleware = require('../middleware/upload.middleware');
const adminMiddleware = require('../middleware/adminMiddleware');


// Rutas para Productos
router.post('/products', multerMiddleware(), valProduct, createProducts);// Crea productos el admin  
router.put('/products/:id', valProduct, updateProducts); // Modifica productos el admin
router.get('/products', allProducts); // Consulta productos el admin
router.delete('/products/:id', deleteProducts); // Borra productos el admin

// Rutas para Pedidos
router.post('/order', valOrder, createOrder); // Crea pedidos el admin
router.put('/order', updateOrder); // Modifica pedidos el admin
router.get('/order', allOrder); // Consulta pedidos el admin
router.delete('/order/:id', deleteOrder); // Borra pedidos el admin

//Modificar datos de Contacto
router.put('/contact/:id', updateContact); // Modifica contacto el admin

module.exports = router;


