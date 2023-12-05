//controlador para obtener catalogo los usuarios
const { Result } = require('express-validator');
const db = require('../models');


const clientProducts = async(req,res) =>{
    try{
        let adminProducts= await db.Producto.findAll();

         // Obtener productos disponibles (filtrar por el campo 'disponible')
        const productosDisponibles = adminProducts.filter(product => product.disponible);
        res.status(200).json({error:false,message:'Productos disponibles al publico',data:productosDisponibles});
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}


module.exports = clientProducts;