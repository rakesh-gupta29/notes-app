const mongoose = require("mongoose")
const PostSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    body:String
})
module.exports= mongoose.model("Item",PostSchema)