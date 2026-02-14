import Signupmakeschema from "../../models/Signup11.js";
import bcrypt from "bcrypt";
import Generatetoken from "../../utils/Token.js";

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password required",
            });
        }

        const user = await Signupmakeschema.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "User not found. Please signup.",
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({
                message: "Incorrect password",
            });
        }

        Generatetoken(user._id, res);

        const userResponse = {
            _id: user._id,
            email: user.email,
            department: user.department,
            username: user.username,
            name: user.name,
        };

        return res.status(200).json({
            message: "Login successful",
            user: userResponse,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Server error",
        });
    }
};

export default Login;
