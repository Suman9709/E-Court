import User from "../model/userModel.js";
import validateSignUpData from "../utils/validation.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res) => {
    try {
        validateSignUpData(req);

        const { firstName, lastName, email, password, role } = req.body;


        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            throw new Error("User with this email already exists. Please login instead.");
        }
        const hashPassword = await bcrypt.hash(password, 10);


        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashPassword,
            role
        })

        const saveUser = await newUser.save();

        const token = await saveUser.getJWT();
        console.log("signup token ", token);

        res.cookie("token", token, {
            expires: new Date(Date.now() + 8 * 3600000), // 8hrs
            httpOnly: true,
        })

        res.json({
            message: "User registered successfully",
            data: saveUser
        })
    } catch (error) {
        res.status(400).send("Error in saving user details" + error.message);
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("Please provide email and password to login.");
        }

        const user = await User.findOne({ email: email });

        if (!user) {
            throw new Error("User with this email does not exist in database.");
        }

        const isPasswordValid = await user.validatePassword(password);


        if (isPasswordValid) {
            const token = await user.getJWT();
            console.log("login token", token);

            res.cookie("token", token, {
                expires: new Date(Date.now() + 8 * 3600000), // 8hrs
                httpOnly: true,
            })

            res.send();
        }
        else {
            throw new Error("Invalid password. Please try again.");
        }
    } catch (error) {
        res.status(400).send("Something went wrong  while logging in user: " + error.message);
    }

}


const logoutUser = async (req, res) => {
    try {
        res.cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
        })
        res.send("Logout successful");
    } catch (error) {
        res.status(400).send("Error while logging out user: " + error.message);
    }
}

export { registerUser, loginUser, logoutUser };