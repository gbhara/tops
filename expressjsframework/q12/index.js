const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const port=process.env.PORT
console.log(port)
app.get('/',(req,res)=>{
res.send("hello")

})
app.listen(port,()=>{
  console.log(`listening  server on {port}`);
                        



})
