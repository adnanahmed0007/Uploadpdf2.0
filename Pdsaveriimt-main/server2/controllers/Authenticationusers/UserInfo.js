const UserInfo = async (req, res, next) => {
    try {
        const findUser = req.user;
        if (!findUser) {
            return res
                .status(400)
                .json({ message: " not find the user" })
        }
        return res
            .status(200)
            .json({
                message: "we got the user details",
                findUser

            })
    }
    catch (e) {
        console.log(e);
        return res
            .status(400)
            .json({
                message: "server error"
            })
    }
}
export default UserInfo