import Signupmakeschema from "../../models/Signup11.js";
import Generatetoken from "../../utils/Token.js";
import bcrypt from "bcrypt"
const Signup = async (req, res, next) => {
    try {
        const { email, department, username, password, name } = req.body;
        console.log(req.body)
        if (email && department && username && password && name) {

            const find = await Signupmakeschema.findOne({
                $or: [{ email }, { username }]
            });
            if (find) {
                return res
                    .status(400)
                    .json({
                        message: "user is alredy register"
                    })
            }
            const hashedpassword = await bcrypt.hash(password, 5);
            const newuser = new Signupmakeschema({
                email,
                department,
                username,
                name,
                password: hashedpassword

            })
            const checkToken = await Generatetoken(newuser._id, res)

            const saveuser = await newuser.save();
            if (saveuser) {

                return res
                    .status(200)
                    .json({
                        message: "user register successfully",
                        saveuser

                    })
            }
        }
        else {
            return res
                .status(400)
                .json({
                    message: "fill all the credentials"
                })
        }
    }
    catch (e) {
        return res
            .status(400)
            .json({
                message: "error occured"
            })
    }

}
export default Signup;