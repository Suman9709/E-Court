import validator from "validator";



const validateSignUpData = (req) => {
    const { firstName, lastName, email, password } = req.body

    if (!firstName || !lastName) {
        throw new Error("Enter First Name and Last Name, they are required fields.");
    }

    else if (!validator.isEmail(email)) {
        throw new Error("Enter a valid email address.");
    }
    else if (!validator.isStrongPassword(password)) {
        throw new Error("Password is not strong enough. It should be at least 8 characters long and include uppercase letters, lowercase letters, numbers, and symbols.");
    }
}

export default validateSignUpData;