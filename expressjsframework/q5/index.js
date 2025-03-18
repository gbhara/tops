// 5. Handling Form Data with POST Requests
// Assignment:
// Set up a route to handle form submissions.
// Instructions:
// 1. Create an HTML form with fields for name and email.
// 2. Set the form method to POST and action to /submit.
// 3. Create a POST route /submit that processes the form data and responds with a success
// message.
const express=require('express')
const app=express()
const port=3000
const path=require('path')
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
    res.render('index')
})

app.post('/sumbit',(req,res)=>{
const {name,email}=req.body
    res.json({name:name,email:email,msg:"sucessfully posted"})
})
app.listen(port,()=>{
    console.log(`server started at ${port}`)
})