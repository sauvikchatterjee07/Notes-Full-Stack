const jwt=require('jsonwebtoken')
const JWTSECRET=process.env.JWTS3CR3T;
const auth=async(req,res,next)=>{
try{
    const authHeader = req.header('Authorization');


    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token provided or invalid format' });
     }
      const token = authHeader.split(' ')[1];
next();

}catch(err){
return res.status(401).json({message:"inavlid token"})

}
}
module.exports=auth;