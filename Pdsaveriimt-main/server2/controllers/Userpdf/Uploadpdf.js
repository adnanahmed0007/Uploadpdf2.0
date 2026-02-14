import Uploadpdfuser from "../../models/UserPdupload.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const UploadPdf = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({
        message: "No PDF file uploaded",
      });
    }

    const { department, year, branch, FileNampdfuser, Student_Name } = req.body;

    if (!department || !year || !branch || !FileNampdfuser || !Student_Name) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const uploadResult = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { resource_type: "raw" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(file.buffer);
    });

    if (!req.user || !req.user._id) {
      return res.status(401).json({
        message: "Unauthorized user",
      });
    }

    const savedData = await Uploadpdfuser.create({
      department: department.toLowerCase(),
      year,
      branch: branch.toLowerCase(),
      UserId: req.user._id,
      pdfFile: uploadResult.secure_url,
      Student_Name: Student_Name.toLowerCase(),
      FileNampdfuser: FileNampdfuser.toLowerCase(),
    });

    return res.status(200).json({
      message: "PDF uploaded successfully",
      data: savedData,
    });

  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
};

export default UploadPdf;
