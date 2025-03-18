// 8. Using Router for Modular Routing
// Assignment:
// Organize your routes using Express Router.
// Instructions:
// 1. Create a new router for user-related routes (/api/users).
// 2. Implement routes to:
// o GET /api/users - respond with a list of users.
// o POST /api/users - add a new user.
// 3. Import the router into your main Express app and use it.
const express=require('express')
const app=express()
const userRoutes=require("./userroutes")
app.use(express.json())
const port=3000
app.use("/api/user",userRoutes)
app.listen(port,()=>{
    console.log(`listening on port${3000}`);

    
})