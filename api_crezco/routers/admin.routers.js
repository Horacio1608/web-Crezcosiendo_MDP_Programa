//Routers para uso exclusivo del administrador

const express = require('express');
const router = express.Router();
const {allProducts,createProducts,deleteProducts,updateProducts} = require('../controller/admin.controller');
const valProduct = require('../validators/productValidators');

router.post('/',valProduct, createProducts,);//crea productos el admin 

router.put('/',updateProducts);//modifica productos el admin
  
router.get('/',allProducts);//consulta productos el admin
  
router.delete('/',deleteProducts);//borra productos el admin

module.exports = router;
