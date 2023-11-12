const validateRequest =(req,res,next,schema)=>{
    const options ={
        stripUnknown:true,
        abortEarly:false,
        allowUnknown:true
    }
    const {error,value} = schema.validate(req.body,options);
    if(error){
        const message = error.details.map(x=>x.message).join(', ');
        res.status(400).json(message);
    }
    else{
        req.body =value;
        next()
    }
}

module.exports = validateRequest;