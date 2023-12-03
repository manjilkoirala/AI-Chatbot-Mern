import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";
export const createToken = (id, email, expiresIn) => {
    const token = jwt.sign({
        id,
        email,
    }, process.env.JWT_SECRET, {
        expiresIn,
    });
    return token;
};
export const verifyToken = async (req, res, next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    return new Promise((resolve, reject) => {
        if (!token || token.trim() === "") {
            return res.status(401).json({ message: "Unauthorized" });
        }
        jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
            if (err) {
                reject(err);
                return res.status(401).json({ message: "Unauthorized" });
            }
            else {
                console.log("Token verified");
                resolve();
                res.locals.jwtData = success;
                return next();
            }
        });
    });
};
//# sourceMappingURL=token-manager.js.map