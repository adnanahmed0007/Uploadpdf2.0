import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./routes/Authentuicationroutes.js";
import router1 from "./routes/Userpdfroutes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();

// ✅ Use Render PORT
const PORT = process.env.PORT || 9090;
const DB_URL = process.env.DB_URL;

// ✅ CORS for development + production
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://uploadpdf2-0.vercel.app"
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

// ✅ Connect DB and Start Server
mongoose
    .connect(DB_URL)
    .then(() => {
        console.log("✅ MongoDB Connected");
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ MongoDB Connection Failed:", err);
    });
