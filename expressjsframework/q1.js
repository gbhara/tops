const express=require('express')
const app=express()
const port=3000
app.get('/',(req,res)=>{
    res.send("welcome to express")
})
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})
