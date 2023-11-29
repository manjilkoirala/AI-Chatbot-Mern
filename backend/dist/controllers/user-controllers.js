import User from "../models/User.js";
import { hash, compare } from "bcrypt";
export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error", error: err.message });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(422).json({ message: "User already exists" });
        }
        const hashedPassword = await hash(password, 10);
        const user = new User({ name, email, password: hashedPassword });
        await user.save();
        return res.status(201).json({ message: "OK", id: user._id.toString() });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error", error: err.message });
    }
};
export const userLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(422).json({ message: "Invalid email or password" });
        }
        const isPasswordCorrect = await compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(422).json({ message: "Invalid email or password" });
        }
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Error", error: err.message });
    }
};
//# sourceMappingURL=user-controllers.js.map