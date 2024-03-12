import { getAllCars } from "../controllers/car-controller.js";
import express from "express";

const carRouter = express.Router();
carRouter.get("/cars", getAllCars);
