import Uploadpdfuser from "../../models/UserPdupload.js";

const GetPdf=async(req,res)=>
{
    try{
         const {department,branch,year}=req.body;
         if(department&&branch&&year)
         {
            const findPdf=await Uploadpdfuser.find({department,branch,year});
           if(!findPdf)
           {
            return res
            .status(400)
            .json({
                message:"no pdf is present "
            })
           }
            else if(findPdf.length==0)
            {
                return res
                .status(400)
                .json({
                    message:" we could not find the pdf"
                })
            }
            return res
            .status(200)
            .json({
                message:"we got all the pdf",
                findPdf

            })


         }
         else{
            return res
            .status(400)
            .json({
                message:"fills all the credetials"
            })
         }

    }
    catch(e)
    {

    }
    
}
export default GetPdf;