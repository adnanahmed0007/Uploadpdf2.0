import Uploadpdfuser from "../../models/UserPdupload.js";
const departmentpdf=async(req,res)=>
{

    try{
    const {department,year}=req.body;
    if(!department||!year)
    {
        return res
        .status(400)
        .json({
            message:"fill all the credentilas"
        })
    }
    const finddata=await Uploadpdfuser.find({department,year});
    const  finddataname=finddata.UserId;
    console.log(finddataname)
        
    if(!finddata)
    {
        return res
        .status(400)
        .json({
            message:"we coul get the pdf"
        })
    }
     else if(finddata.length==0)
     {
        return res
        .status(400)
        .json({
            message:"tehere is no pdf"
        })
     }
     return res
     .status(200)
     .json({
        message:"we got all the pdf",
        finddata
     })
    }
    catch(e)
    {
        console.log(e)
        return res
        .status(400)
        .json({
            message:"server error",
            
        })
    }
    }

 
 

export default departmentpdf;