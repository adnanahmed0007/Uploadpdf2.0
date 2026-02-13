import mongoose from "mongoose";
const Signupschema = mongoose.Schema({
    email:
    {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,


    },
    password: {
        type: String,
        required: true,
    },
    name:
    {
        type: String,
        required: true
    }
}, { timeStamps: true })
const Signupmakeschema = mongoose.model("Usersignup", Signupschema);
export default Signupmakeschema;