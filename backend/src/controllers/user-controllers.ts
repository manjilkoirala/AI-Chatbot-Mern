import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt";
import { create } from "domain";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "OK", users });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error", error: err.message });
  }
};
export const userSignup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(422).json({ message: "User already exists" });
    }
    const hashedPassword = await hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    //Store Cookie
    res.clearCookie(COOKIE_NAME,{
      path: "/", 
      domain: "localhost",
      httpOnly: true,
      signed: true,
    })

    const token = createToken(user._id.toString(), user.email, "7d");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie(COOKIE_NAME, token, {
      path: "/", 
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });


    return res.status(201).json({ message: "OK", name: user.name,email: user.email, });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error", error: err.message });
  }
};
export const userLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

    //Store Cookie
    res.clearCookie(COOKIE_NAME,{
      path: "/", 
      domain: "localhost",
      httpOnly: true,
      signed: true,
    })

    const token = createToken(user._id.toString(), user.email, "7d");
    const expires = new Date();
    expires.setDate(expires.getDate() + 7);
    res.cookie(COOKIE_NAME, token, {
      path: "/", 
      domain: "localhost",
      expires,
      httpOnly: true,
      signed: true,
    });

    return res.status(200).json({ message: "OK", name: user.name,email: user.email, });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error", error: err.message });
  }
};

export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try { 
    const user = await User.findById(res.locals.jwtData.id );
    if (!user) {
      
      return res.status(422).json({ message: "Invalid email or password" });
    }
    if(user._id.toString()!==res.locals.jwtData.id){
      return res.status(422).json({ message: "Not Permitted" });

    }
    //Store Cookie
    
    return res.status(200).json({ message: "OK", name: user.name,email: user.email, });
  } catch (err) {
  
    console.log("Error:",err.message);
    return res.status(500).json({ message: "Error", error: err.message });
    
  }
};
