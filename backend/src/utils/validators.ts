import { body,ValidationChain,validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
 export const validate=(validations: ValidationChain[])=>{
    return async (req: Request, res: Response, next: NextFunction) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) break;
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }
     return res.status(422).json({ errors: errors.array() });

 }
}

export const loginValidator = [
    body('email').trim().isEmail().withMessage('Invalid email'),
    body('password').trim().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
];

    export const signupValidator = [
        body('name').trim().notEmpty().withMessage('Name is required'),
    ...loginValidator    
    ];

    
