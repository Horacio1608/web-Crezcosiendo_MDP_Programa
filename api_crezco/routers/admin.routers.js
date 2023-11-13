//Routers para uso exclusivo del administrador

const express = require('express');
const adminRouters = express.Router();
const {allProducts,createProducts,deleteProducts,updateProducts} = require('../controller/admin.controller');
const validateProduct = require('../request/product.request');

adminRouters.post('/', validateProduct, createProducts);//crea productos el admin

adminRouters.put('/',updateProducts);//modifica productos el admin
  
adminRouters.get('/',allProducts);//consulta productos el admin
  
adminRouters.delete('/',deleteProducts);//borra productos el admin

module.exports = adminRouters;
