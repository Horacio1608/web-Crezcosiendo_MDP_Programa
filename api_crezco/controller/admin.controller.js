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


//se crea los productos
const createProducts = async (req, res) => {
   
    try {
        const { disponible, titulo, precio, descripcion } = req.body;

        // verifica si se subieron imagenes
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).json({ error: true, message: 'No se subieron imagenes' });
        }
        
        //  imagen1, imagen2, imagen3, imagen4
        //const imagenes = [];
        const imagenes = req.files.map(file => file.path);
        //console.log("Rutas de imágenes:", imagenes)
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
            imagen1: imagenes[0],
            imagen2: imagenes[1],
            imagen3: imagenes[2],
            imagen4: imagenes[3],
            descripcion,
});
        
        res.status(200).json({ error: false, message: 'Producto Creado', data: adminProducts });
    } catch (e) {
        //console.log(e);
        res.status(400).json({ error: true, message: e.message || 'Error al crear productos.' });
    }
};
//borro productos por id
const deleteProducts = async(req,res)=>{
    try{
        let id = req.params.id;
        //console.log(id);
        await db.Producto.findAll({where:{id:id}}).then(async(Result)=>{
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
                await db.Formulario.destroy({where:{id:id}});
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

  const updateContact = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(req.body);
  
      // Buscar el contacto con el ID dado
      const existingContact = await db.Contact.findOne({ where: { id: id } });
  
      if (existingContact) {
        // Si el contacto existe, actualizar
        const [updatedRowsCount] = await db.Contact.update(req.body, { where: { id: id } });
  
        if (updatedRowsCount === 0) {
          res.status(500).json({ error: true, message: 'Error al intentar actualizar el contacto' });
        } else {
          res.status(200).json({ error: false, message: 'Contacto actualizado', data: req.body });
        }
      } else {
        // Si el contacto no existe, crear uno nuevo con el ID proporcionado
        const newContact = await db.Contact.create({ id: id, ...req.body });
        
        if (newContact) {
          res.status(201).json({ error: false, message: 'Contacto creado', data: newContact });
        } else {
          res.status(500).json({ error: true, message: 'Error al intentar crear el nuevo contacto' });
        }
      }
    } catch (e) {
      res.status(400).json({ error: true, message: e.message });
    }
  };

module.exports = {allProducts,createProducts,deleteProducts,updateProducts,allOrder,createOrder,deleteOrder,updateOrder,updateContact};