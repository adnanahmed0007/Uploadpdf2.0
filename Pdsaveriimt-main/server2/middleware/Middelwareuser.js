import Signupmakeschema from "../models/Signup11.js";
import jwt from "jsonwebtoken";

const MiddlwareUse = async (req, res, next) => {
  try {

    const token = req.cookies.jwt;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized - No token"
      });
    }


    const verify = jwt.verify(token, process.env.JWT_SECRET);


    const findId = await Signupmakeschema.findById(verify.user_Id);

    if (!findId) {
      return res.status(401).json({
        message: "User not found"
      });
    }


    req.user = findId;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
};

export default MiddlwareUse;
