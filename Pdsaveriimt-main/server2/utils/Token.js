 import jwt from "jsonwebtoken";
 const secretKey="MysecretKey123"
 const Generatetoken=async(user_Id,res)=>
 {
    const token=jwt.sign({user_Id},secretKey,{expiresIn:"15d"});
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*1000,
        httpOnly:true,

         

    })
    return token;
 }
 export default Generatetoken;