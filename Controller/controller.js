const Model = require('../Model/model')

//create
//getall
//getbyid
//update
//delete

exports.create = async(req,res,next)=>{
    try
    {
        const {name, age} = req.body
        const Doc = new Model({name,age})
        await Doc.save()
        return res.json({Message:"Document created successfully",data : Doc})
    }
    catch(err){
        return res.json({Message:"Something occurred",Error:err.message})
    }
}