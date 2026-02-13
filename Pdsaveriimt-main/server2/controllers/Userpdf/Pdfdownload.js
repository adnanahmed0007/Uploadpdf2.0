    import axios from "axios";
import Uploadpdfuser from "../../models/UserPdupload.js";

const Pdfdownload = async (req, res) => {
  try {
    const { filename } = req.params;
    

    // 1. Find the PDF data in DB
    const pdfData = await Uploadpdfuser.findOne({ FileNampdfuser: filename });

    if (!pdfData) {
      console.log("File not found in DB");
      return res.status(404).json({ message: "File not found in database" });
    }

    const cloudinaryUrl = pdfData.pdfFile;

 

    // 2. Stream the file from Cloudinary
    const fileResponse = await axios.get(cloudinaryUrl, {
      responseType: "stream",
      timeout: 10000, // 10 seconds timeout
    });

    // 3. Set correct headers for PDF download
    res.attachment(`${filename}.pdf`);  // Ensures the file is treated as a downloadable PDF

    // 4. Pipe the file data from Cloudinary to the response
    fileResponse.data.pipe(res);

     
    fileResponse.data.on("error", (err) => {
      console.error("❌ Error while streaming:", err.message);
      res.status(500).end("Stream error");
    });

  } catch (e) {
    console.error("❌ Download error:", e.message);
    res.status(500).json({
      message: "Error downloading file",
    });
  }
};

export default Pdfdownload;
