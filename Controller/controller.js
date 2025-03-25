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

exports.getall=async(req,res,next)=>{
    try{
        const getdata = await Model.find();  
        if(!getdata){
            return res.status(400).json({message:"No Records found"})
        }
        return res.status(201).json({message:"Document Received Successfully..",data:getdata})
    }
    catch(err){
        return res.json({message:"Something Error Occured",Error:err.message})
    }

}

exports.getbyId=async(req,res,next)=>{
    try{
        const {id}=req.params

        const getdata = await Model.findById(id);

        if(!getdata){
            return res.status(404).json({message:"No Records Found.."})
        }

        return res.status(201).json({message:"Document Received Successfully..",data:getdata})

    }
    catch(err){
        return res.json({message:"Something Error Occured..",Error:err.message})
    }
}


exports.updatedata=async(req,res,next)=>{
    try{
        const{id,name,age} =req.body;

        const Updateobj ={}

        if(name) Updateobj.name= name;
        if(age) Updateobj.age =age;

        const Updatedata = await Model.findByIdAndUpdate(id,Updateobj,{new:true})
        if(!Updatedata){
            return res.status(404).json({message:"Not Updated.."})
        }

        return res.status(201).json({message:"Updated Successfully..",data:Updatedata})
    }
    catch(err){
        return res.status(400).json({message:"Something went wrong..",Error:err.message})
    }
}

exports.deletedata = async(req,res,next)=>{
    try{
        const {id} =req.body;
        const deletedata = await Model.findByIdAndDelete(id)
        if(!deletedata){
            return res.status(404).json({message:"Not Deleted..."})
        }
        return res.status(201).json({message:"Deleted Successfully..."})
    }
    catch(err){
        return res.status(400).json({message:"Something went wrong..",Error:err.message})
    }
}