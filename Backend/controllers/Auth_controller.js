const User=require('../models/user')
const jwt =require('jsonwebtoken')
const JWT_SECRET=process.env.JWTS3CR3T;

exports.signup=async(req,res)=>{
    try{
const{name,email,password}=req.body;
const user_exists=await User.findOne({email});
if(user_exists) return res.status(400).json({message:"user already exists"})
    const new_user=new User({name,email,password})
await new_user.save();

res.status(201).json({
    message:"registered successfully, now login"
})
    }catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}
exports.login=async(req,res)=>{
    try{
    const{email,password}=req.body;
    const existing_user= await User.findOne({email})
    if(!existing_user)return res.status(401).json({message :"invalid credentials"})
const isMatch = await existing_user.comparePassword(password);
    if(!isMatch) return res.status(400).json({message:"invalid credentials"})
        const token =jwt.sign({userId:existing_user._id},
    JWT_SECRET,{expiresIn:"1h"});
    res.status(201).json({message:"logged in successfully",
        user:existing_user._id,
        token,
    })
}catch(err){
     res.status(500).json({ message: 'Login failed', error: err.message });
}


}
