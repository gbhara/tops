const express = require('express');
const router = express.Router();
let users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
];
router.get("/",(req,res)=>{
    res.json(users)


})
router.post("/",(req,res)=>{
   const user=req.body
   console.log(user)
   users.push(user)


})
module.exports=router
