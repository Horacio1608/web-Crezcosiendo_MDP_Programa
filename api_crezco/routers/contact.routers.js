//Routers para la carga de pedidos

const express = require('express');
const router = express.Router();
const valOrder = require('../validators/orderValidators');
const clientOrder = require('../controller/order.controller');

router.post('/order', valOrder, clientOrder);


  

module.exports = router;

