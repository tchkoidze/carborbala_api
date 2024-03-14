import { Request, Response } from "express";
import User from "../models/User.js";

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const newUser = new User({
      name,
      email,
      password,
    });
    newUser.save();
    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(401).json(error);
  }
};
