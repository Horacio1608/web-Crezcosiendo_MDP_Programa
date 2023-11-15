
//Productos
const allProducts = async(req,res) =>{
    res.json({data:'all products admin'})
}

const createProducts = async(req,res)=>{
    res.json({data:'create products admin'})
}

const deleteProducts = async(req,res)=>{
    res.json({data:'delete products admin'})
}

const updateProducts = async(req,res)=>{
    res.json({data:'update products admin'})
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