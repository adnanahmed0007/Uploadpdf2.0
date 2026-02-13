import express from "express";
import Signup from "../controllers/Authenticationusers/Signup.js";
import Login from "../controllers/Authenticationusers/Login.js";
import MiddlwareUse from "../middleware/Middelwareuser.js";
import UserInfo from "../controllers/Authenticationusers/UserInfo.js";
import Logout from "../controllers/Authenticationusers/Logout.js";
const router = express.Router();
router.post("/sinup", Signup);
router.post("/login", Login)
router.get("/user/info", MiddlwareUse, UserInfo)
router.get("/user/logout", MiddlwareUse, Logout)
export default router;