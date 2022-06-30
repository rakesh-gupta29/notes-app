const express = require("express")
const route = express.Router()
const mongoose = require("mongoose")
const Item = require("../model/post_schema")

route.get("/", async (req,res) =>{
    try
    {
        const posts= await Item.find()
       const data = await  res.json({message:"success",
        data:posts
        })
    }catch(err){
        res.json({message:"an error occured",
        error:err})
    }
  
})

route.post("/post",(req,res) =>{
    const new_item =new Item ({
        _id: new mongoose.Types.ObjectId(),
        title:req.body.title,
        body:req.body.body
    })
    new_item.save().then(after =>res.redirect("/")).catch(err => res.json(err))
})

route.patch("/update",  (req,res) =>{
    try{
       Item.updateOne(
            {_id:req.body.target_id},
            {$set:{title:req.body.title,body:req.body.body}}
        ).then(() =>res.redirect("/") )
    }
    catch(err){
        res.json({message:"failed",error:err})
    }
})
route.delete("/delete", async  (req,res) =>{
    try{
         await  Item.remove({_id:req.body.target_id}).then(() => res.redirect("/"))
    }catch(err){
        res.json({message:"error",error:err})
    }
})

route.delete("/deleteall",async (req,res) =>{
    try{
        await Item.remove({__v:0}).then(after => res.redirect("/"))
    }
    catch{
        res.json({message:"error occured",status:"200"})
    }
})
module.exports= route