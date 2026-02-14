import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import router from "./routes/Authentuicationroutes.js";
import router1 from "./routes/Userpdfroutes.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



const app = express();

// 🔥 VERY IMPORTANT FOR RENDER (SECURE COOKIES)
app.set("trust proxy", 1);

const PORT = process.env.PORT || 9090;
const DB_URL = process.env.DB_URL;

// ✅ CORS (NO "*" HERE)
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://uploadpdf2-0.vercel.app/",
        ],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));




app.use("/authenttication", router);
app.use("/user/pdf", router1);

// ✅ DB Connectionn
mongoose
    .connect(DB_URL)
    .then(() => {
        console.log("✅ MongoDB Connected");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log("❌ MongoDB Connection Failed:", err);
    });
