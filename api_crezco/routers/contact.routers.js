//Routers para la carga de contactos

const express = require('express');
const contactRouter = express.Router();


contactRouter.get('/',(req,res)=>{
    res.send('contacto');
  });

module.exports = contactRouter;

