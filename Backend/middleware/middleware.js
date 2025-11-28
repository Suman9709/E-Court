import jwt from "jsonwebtoken";
import User from "../model/userModel.js";


export const authMiddleware = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided Please Login!!" });
        }

        const decodedObj = await jwt.verify(token, process.env.JWT_SECRET);

        const { _id } = decodedObj;

        const user = await User.findById(_id);

        if (!user) {
            throw new Error("Unauthorized: User not found");
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).send("Error" + error.message);
    }
}

export const adminMiddleware = async (req, res, next) => {

    try {
        const { role } = req.user;

        if (role !== 'admin') {
            return res.status(403).json({ message: "Forbidden: Admins only can save case details" });
        }
        next();
    } catch (error) {

    }
}