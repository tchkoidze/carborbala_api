import { Request, Response } from "express";
import Car from "../models/Cars.js";

export const getAllCars = async (_: Request, res: Response) => {
  try {
    const data = await Car.find();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(401).json(error);
  }
};
