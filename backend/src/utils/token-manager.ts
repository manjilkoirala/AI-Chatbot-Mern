import { NextFunction,Request,Response } from "express";
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./constants.js";


export const createToken = (id: string, email: string, expiresIn) => {
  const token = jwt.sign(
    {
      id,
      email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn,
    }
  );

  return token;
};

export const verifyToken = async (req:Request,res:Response,next:NextFunction) => {
    const token= req.signedCookies[`${COOKIE_NAME}`];
    return new Promise<void>((resolve, reject) => {
      if(!token || token.trim()===""){
        return res.status(401).json({message:"Unauthorized"})}
       jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
        if(err){
          
          reject(err)
          return res.status(401).json({message:"Unauthorized"})
        }else{
          console.log("Token verified")
          resolve();
          
          res.locals.jwtData = success;
          
          return next();
        
        }
    })
    
})}