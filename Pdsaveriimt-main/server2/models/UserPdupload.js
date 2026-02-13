import mongoose from "mongoose";
const UserUploadpdf=mongoose.Schema({
    department:
    {
        type:String,
        required:true,
    }
    ,
    branch:
    {
        type:String,
        required:true,
    },
    year:
    {
        type:Number,
        required:true,
    },
    UserId:
    {
        type:mongoose.Schema.ObjectId,
        ref:"Usersignup",

    },
    Student_Name:
    {
        type:String,
        required:true,

    },
    FileNampdfuser:
    {
 type:String,
 required:true,
    },
    pdfFile:
    { 
        type:String,
        required:true,

    }
     
    



},{timestamps:true})
const Uploadpdfuser=mongoose.model("userPdfUploadinfo",UserUploadpdf)
export default Uploadpdfuser