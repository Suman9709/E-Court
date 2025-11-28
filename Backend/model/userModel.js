import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 50
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'lawyer', 'user'],
        default: 'admin'
    }
}, { timestamps: true })

userSchema.methods.validatePassword = async function (passwordInput) {
    const user = this;
    const hashPassword = user.password;

    const isPasswordValid = await bcrypt.compare(passwordInput, hashPassword);
    return isPasswordValid;
}

userSchema.methods.getJWT = async function () {
    const user = this;

    const token = await jwt.sign({
        _id: user._id,
    }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_SECRET_EXPIRES_IN
    });
    return token;
}


const User = mongoose.model('User', userSchema);

export default User;