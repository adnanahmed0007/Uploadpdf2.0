import UploadpdfuserS from "../../models/UserPdupload.js";
const AllpDfdepartemntbrabnchyear = async (req, res) => {
    try{

    
    const {department,branch,year,FileNampdfuser}=req.body;
    if(department&&branch&&year&&FileNampdfuser)
    {
        const dataget=await UploadpdfuserS.find({department,branch,year,FileNampdfuser})
         if(!dataget)
        {
    return res
            .status(400)
            .json({
                message:"no pdf is there"
            })
        }
        if(dataget.length==0)
        {
            return res
            .status(400)
            .json({
                message:"no pdf is there"
            })
        }
        return res
        .status(200)
        .json({
            message:"we got th pdf",
            dataget
        })

         
    }
    else if(department&&branch&&FileNampdfuser)
    {
        const datagetback=await UploadpdfuserS.find({department,branch,FileNampdfuser});
        if(!datagetback)
        {
    return res
            .status(400)
            .json({
                message:"no pdf is there"
            })
        }
      else   if(datagetback.length==0)
        {
            return res
            .status(400)
            .json({
                message:"no pdf is there"
            })
        }
        return res
        .status(200)
        .json({
            message:"we got the pdf",
            datagetback
        })

    }
    else if(department&&FileNampdfuser)
    {
        const databackget=await UploadpdfuserS.find({department,FileNampdfuser});
         if(!databackget)
        {
    return res
            .status(400)
            .json({
                message:"no pdf is there"
            })
        }
       else if(databackget.length==0)
        {
            return res
            .status(400)
            .json({
                message:"no pdf is there"
            })
        }
        return res
        .status(200)
         .json({
            message:"we got the pdf",
            databackget
         })
    } 
    else 
    {
        return res
        .status(400)
        .json({
            message:"fill all the credentials"
        })
    }
    }
    catch(e)
    {
        console.log(e)
    }
}
export default AllpDfdepartemntbrabnchyear