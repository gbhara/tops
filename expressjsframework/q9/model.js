const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true}
})
const User=mongoose.model("tests",userSchema)
module.exports=User