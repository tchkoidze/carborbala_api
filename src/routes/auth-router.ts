import { createUser } from "../controllers/auth-controller.js";
import express from "express";

const authRouter = express.Router();
authRouter.post("/register", createUser);

export default authRouter;
