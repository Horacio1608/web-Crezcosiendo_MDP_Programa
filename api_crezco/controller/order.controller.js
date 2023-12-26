const { Result } = require('express-validator');
const db = require('../models');
const create = require('prompt-sync');



//Pedidos de los clientes
const clientOrder = async(req,res)=>{
    try{
        let adminOrder = await db.Formulario.create(req.body);
        res.status(200).json({error:false,message:'Crea los pedidos',data:adminOrder});
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}

module.exports = clientOrder;