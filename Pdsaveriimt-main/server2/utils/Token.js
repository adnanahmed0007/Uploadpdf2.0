import jwt from "jsonwebtoken";

const Generatetoken = async (user_Id, res) => {
    const token = jwt.sign(
        { user_Id },
        process.env.JWT_SECRET,
        { expiresIn: "15d" }
    );

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true,      // required for Vercel ↔ Render
        sameSite: "none",  // required for cross-domain
    });

    return token;
};

export default Generatetoken;
