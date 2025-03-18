const express=require('express')
const User=require('./model')
const router=express.Router()
router.post('/',async(req,res)=>{
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        await newUser.save(); // Save user to database
        res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: "Error creating user", details: error.message });
    }

})
module.exports=router


