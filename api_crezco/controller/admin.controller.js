const { Result } = require('express-validator');
const db = require('../models');

//Productos  

//consulto los productos
const allProducts = async(req,res) =>{
    try{
        let adminProducts= await db.Producto.findAll();
        res.status(200).json({error:false,message:'Todos los Productos',data:adminProducts});
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}

/*const createProducts = async(req,res)=>{
    try{
        let adminProducts = await db.Producto.create(req.body);
        res.status(200).json({error:false,message:'Crea los Productos',data:adminProducts});
    }
    catch(e){
        console.log(e);
        res.status(400).json({error:true,message:e});
    }
}*/

//se crea los productos
const createProducts = async (req, res) => {
    try {
        const { disponible, titulo, precio, descripcion } = req.body;

        // verifica si se subieron imagenes
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ error: true, message: 'No se subieron imagenes' });
        }

        //  imagen1, imagen2, imagen3, imagen4
        const imagenes = [];

        for (let i = 1; i <= 4; i++) {
            const field = `imagen${i}`;
            if (req.files[field]) {
                imagenes.push(req.files[field].path);
            } else {
                
                imagenes.push(null);
            }
        }

        // push to db
        let adminProducts = await db.Producto.create({
            disponible,
            titulo,
            precio,
            imagen1: imagenes.imagen1,
            imagen2: imagenes.imagen2,
            imagen3: imagenes.imagen3,
            imagen4: imagenes.imagen4,
            descripcion,
        });

        res.status(200).json({ error: false, message: 'Crea los Productos', data: adminProducts });
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: true, message: e.message || 'Error al crear productos.' });
    }
};
//borro productos por id
const deleteProducts = async(req,res)=>{
    try{
        let id = req.params.id;
        await db.Product.findAll({where:{id:id}}).then(async(Result)=>{
            if(Result.length > 0 ){
                await db.Producto.destroy({where:{id:id}});
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
//actualiza productos por id
const updateProducts = async(req,res)=>{
    try{
        let id = req.params.id;
        await db.Producto.update(req.body,{where:{id:id}});
        res.status(200).json({error:false,message:'Producto actualizado',data:null});
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}

//Pedidos 
//consulta de pedidos
const allOrder = async(req,res) =>{
    try{
        let adminOrder= await db.Formulario.findAll();
        res.status(200).json({error:false,message:'Todos los pedidos',data:adminOrder});
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}
//creo los pedidos
const createOrder = async(req,res)=>{
    try{
        let adminOrder = await db.Formulario.create(req.body);
        res.status(200).json({error:false,message:'Crea los pedidos',data:adminOrder});
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}
//borra los pedidos por id
const deleteOrder = async(req,res)=>{
    try{
        let id = req.params.id;
        await db.Formulario.findAll({where:{id:id}}).then(async(Result)=>{
            if(Result.length > 0 ){
                await db.Orders.destroy({where:{id:id}});
                res.status(200).json({error:false,message:'Pedido eliminado',data:null});
            }else{
                res.status(404).json({error:true,message:'Id inexistente',data:null});
            }
        })
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}
//actualiza los pedidos
const updateOrder = async(req,res)=>{
    try{
        let id = req.params.id;
        await db.Formulario.update(req.body,{where:{id:id}});
        res.status(200).json({error:false,message:'Pedido actualizado',data:null});
    }
    catch(e){
        res.status(400).json({error:true,message:e});
    }
}
module.exports = {allProducts,createProducts,deleteProducts,updateProducts,allOrder,createOrder,deleteOrder,updateOrder};