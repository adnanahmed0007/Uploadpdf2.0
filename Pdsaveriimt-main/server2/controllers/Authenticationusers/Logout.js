const Logout=async(req,res)=>
{
     try{
        res.cookie("jwt","",{
            maxAge:"",
            httpOnly:true,
             sameSite:"lax",
        secure: process.env.NODE_ENV === "production"
        })
        return res
        .status(200)
        .json({
            message:"successfully loged out"
        })

     }
     catch(e)
     {
        console.log(e);
        return res
        .status(400)
        .json({
            message:"log out failed tru again server error"
        })

     }

}
 export default Logout;