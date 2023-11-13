

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

module.exports = {allProducts,createProducts,deleteProducts,updateProducts};