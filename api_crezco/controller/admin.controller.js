const { Result } = require('express-validator');
const db = require('../models');

//Productos  
const allProducts = async(req,res) =>{
    try{
        let adminProducts= await db.Product.findAll();
        res.status(200).json({error:false,message:'Todos los Productos',data:adminProducts});
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}

const createProducts = async(req,res)=>{
    try{
        let adminProducts = await db.Product.create(req.body);
        res.status(200).json({error:false,message:'Crea los Productos',data:adminProducts});
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}

const deleteProducts = async(req,res)=>{
    try{
        let id = req.params.id;
        await db.Product.findAll({where:{id:id}}).then(async(Result)=>{
            if(Result.length > 0 ){
                await db.Product.destroy({where:{id:id}});
                res.status(200).json({error:false,message:'Producto eliminado',data:null});
            }else{
                res.status(404).json({error:true,message:'Id inexistente',data:null});
            }
        })
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}

const updateProducts = async(req,res)=>{
    try{
        let id = req.params.id;
        await db.Product.update(req.body,{where:{id:id}});
        res.status(200).json({error:false,message:'Producto actualizado',data:null});
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}

//Pedidos 

const allOrder = async(req,res) =>{
    res.json({data:'all Order admin'})
}

const createOrder = async(req,res)=>{
    res.json({data:'create Order admin'})
}

const deleteOrder = async(req,res)=>{
    res.json({data:'delete Order admin'})
}

const updateOrder = async(req,res)=>{
    res.json({data:'update Order admin'})
}
module.exports = {allProducts,createProducts,deleteProducts,updateProducts,allOrder,createOrder,deleteOrder,updateOrder};