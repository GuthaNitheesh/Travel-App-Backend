
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

const User = require("../model/user.model");



const loginHandler=async (req, res) => {
        try {
            const user = await User.findOne({ number: req.body.number });

            if (!user) {
                return res.status(401).json({ message: "Invalid mobile number" });
            }

            const decodedPassword = CryptoJS.AES.decrypt(
                user.password,
                process.env.PASSWORD_SECRET_KEY
            ).toString(CryptoJS.enc.Utf8);

            if (decodedPassword !== req.body.password) {
                return res.status(401).json({ message: "Incorrect password" });
            }

            // If both checks pass, send the user as response
            const { password, ...rest } = user._doc;
            const accessToken = jwt.sign(
                { username: user.username },
                process.env.JWT_SECRET_KEY,
                { expiresIn: "2d" } // optional: token expires in 2 days
            );
            return res.status(200).json({ ...rest, accessToken });

        } catch (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal server error" });
        }
    }



    module.exports=loginHandler;