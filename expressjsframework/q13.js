const express=require('express')
const app=express()
const dotenv=require('dotenv').config()
const port=3000
console.log(port)
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 2, // Limit each IP to 100 requests per windowMs
    message: "Too many requests. Please try again later.",
    standardHeaders: true, // Return rate limit info in the headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use(limiter)



app.get('/',(req,res)=>{
res.send("hello")

})
app.listen(port,()=>{
  console.log(`listening  server on {port}`);
                        



})