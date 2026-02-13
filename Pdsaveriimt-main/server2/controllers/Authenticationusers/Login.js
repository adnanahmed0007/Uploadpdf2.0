import Signupmakeschema from "../../models/Signup11.js";
import bcrypt from "bcrypt"
import Generatetoken from "../../utils/Token.js";
const Login=async(req,res)=>
{
 try{
     const {username,password}=req.body;
     if(username&&password)
    {
        const findOne=await Signupmakeschema.findOne({username});
         if(!findOne)
         {
            return res
            .status(400)
            .json({
                message:"we cant find the user signup "
            })
         }
         const compare=await bcrypt.compare(password,findOne.password);
         if(!compare)
         {
            return res
            .status(400)
            .json({
                message:"password is incorrect"
            })
         }
        const GenerateToke=await Generatetoken(findOne._id,res);
     
         return res
         .status(200)
         .json({
            message:"password is correct login successfully",
            findOne
         })

    
     }
 }
 catch(e)
 {
    return res
    .status(400)
    .json({
        message:"server error"
    })
 }
}
export default Login;