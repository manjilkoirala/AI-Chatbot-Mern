import jwt from 'jsonwebtoken';
export const createToken = (id, email, expiresIn) => {
    const token = jwt.sign({
        id,
        email
    }, process.env.JWT_SECRET, {
        expiresIn
    });
    return token;
};
//# sourceMappingURL=token-manager.js.map