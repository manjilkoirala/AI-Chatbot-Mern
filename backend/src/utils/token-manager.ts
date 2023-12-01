import jwt from 'jsonwebtoken';
export const createToken = (id:string,email:string,expiresIn) => {

    const token = jwt.sign(
        {
            id,
            email
        },
        process.env.JWT_SECRET,
        {
            expiresIn
        }
        
    );

    return token;
}