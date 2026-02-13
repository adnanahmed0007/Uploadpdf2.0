import Signupmakeschema from "../../models/Signup11.js";
import Uploadpdfuser from "../../models/UserPdupload.js";
import cloudinary from "cloudinary"
cloudinary.config({
    cloud_name: "",       // replace with your Cloudinary credentials
    api_key: "",
    api_secret: "",
    secure: true
})
const UploadPdf = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "There is no PDF file uploaded" });
    }

    const { department, year, branch, FileNampdfuser, Student_Name } = req.body;

    if (!department || !year || !branch || !FileNampdfuser || !Student_Name) {
      return res.status(400).json({ message: "All fields are required" });
    }

    
    cloudinary.v2.uploader.upload_stream(
      { resource_type: "raw" },
      async (error, result) => {
        if (error) {
          console.error("Cloudinary error:", error);
          return res.status(500).json({ message: "Cloudinary upload failed" });
        }

        const fileUrl = result.secure_url;
        const user_Id = req.findId._id;

        const finduser = await Signupmakeschema.findById(user_Id);
        if (!finduser) {
          return res.status(400).json({ message: "User not found" });
        }

        const upload = new Uploadpdfuser({
          department: department.toLowerCase(),
          year,
          branch: branch.toLowerCase(),
          UserId: user_Id,
          pdfFile: fileUrl,
          Student_Name: Student_Name.toLowerCase(),
          FileNampdfuser: FileNampdfuser.toLowerCase(),
        });

        const savedData = await upload.save();

        return res.status(200).json({
          message: "PDF uploaded and data saved successfully",
          savedData,
        });
      }
    ).end(file.buffer); // Send the file buffer to Cloudinary
  } catch (e) {
    console.error(e);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default UploadPdf;
