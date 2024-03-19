import {
  createUser,
  emailVerification,
  login,
} from "../controllers/auth-controller.js";
import express from "express";

const authRouter = express.Router();
authRouter.post("/register", createUser);
authRouter.post("/login", login);
authRouter.post("/verify", emailVerification);

export default authRouter;
