// 2. Creating Routes
// Assignment:
// Implement multiple routes in your Express application.
// Instructions:
// 1. Create routes for:
// o / - respond with "Home Page"
// o /about - respond with "About Page"
// o /contact - respond with "Contact Page"
// 2. Log the requested route in the console.

const express=require('express')
const app=express()
port=3000
app.get("/",(req,res)=>{
    res.send("home page")
})
app.get("/about",(req,res)=>{
    res.send("about page")
})
app.get("/contact",(req,res)=>{
    res.send("contact page")
})
app.listen(port,()=>{
    console.log(`server started at $(prot)`)  
}  )
         