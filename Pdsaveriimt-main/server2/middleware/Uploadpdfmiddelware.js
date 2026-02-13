import multer from "multer";
 import path from "path";
 const storage=multer.memoryStorage();
 const fileFilter=async(req,file,cb)=>
 {
    if(file.mimetype === "application/pdf")
    {
        cb(null,true);
    }
    else{
          
        cb(new Error("Only PDF files are allowed"), false);
    }
    
 }

const upload = multer({ storage, fileFilter });

export default upload;
