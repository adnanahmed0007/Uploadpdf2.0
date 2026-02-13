import Signupmakeschema from "../models/Signup11.js";
import jwt from "jsonwebtoken";
 const secretKey="MysecretKey123"
 
const MiddlwareUse=async(req,res,next)=>
{
     
    try{
  const toknen=req.cookies.jwt;
  if(!toknen)
  {
    return res
    .status(400)
    .json({
        message:"we can find the cookies cookies expires"
    })
  }
  const verify=jwt.verify(toknen,secretKey);
  if(!verify)
  {
    return res
    .status(400)
    .json({
        message:"we cant veruify error in secrett key"
    })
  }
  const findId=await Signupmakeschema.findById(verify.user_Id)
  if(!findId)
  {
    return res
    .status(400)
    .json({
        message:"we can not find the user info"
    })
  }
  req.findId=findId;
 
  next();

    }
    catch(e)
    {
        return res
        .status(400)
        .json({
            message:"server error1111"
        })
    }

}
export default MiddlwareUse