//Routers para la carga de contactos

const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('contacto');
  });

module.exports = router;

