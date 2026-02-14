import Signupmakeschema from "../../models/Signup11.js";
import Generatetoken from "../../utils/Token.js";
import bcrypt from "bcrypt";

const Signup = async (req, res) => {
    try {
        const { email, department, username, password, name } = req.body;
        console.log(req.body)

        if (!email || !department || !username || !password || !name) {
            return res.status(400).json({
                message: "Fill all the credentials",
            });
        }

        const existingUser = await Signupmakeschema.findOne({
            $or: [{ email }, { username }],
        });

        if (existingUser) {
            return res.status(400).json({
                message: "User already registered",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await Signupmakeschema.create({
            email,
            department,
            username,
            name,
            password: hashedPassword,
        });


        Generatetoken(newUser._id, res);


        const userResponse = {
            _id: newUser._id,
            email: newUser.email,
            department: newUser.department,
            username: newUser.username,
            name: newUser.name,
        };

        return res.status(201).json({
            message: "User registered successfully",
            user: userResponse,
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error occurred",
        });
    }
};

export default Signup;
