

const allProducts = async(req,res) =>{
    res.json({data:'all products'})
}

const createProducts = async(req,res)=>{
    res.json({data:'create products'})
}

const deleteProducts = async(req,res)=>{
    res.json({data:'delete products'})
}

const updateProducts = async(req,res)=>{
    res.json({data:'update products'})
}

module.exports = {allProducts,createProducts,deleteProducts,updateProducts};