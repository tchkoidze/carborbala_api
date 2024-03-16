import { Request, Response } from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import addUserSchema from "../schemas/add-user-shema.js";
import { sendVerificationLink } from "../mail/edge.js";
import loginSchema from "../schemas/login-schema.js";
import { validate } from "uuid";

export const createUser = async (req: Request, res: Response) => {
  //const { name, email, password } = req.body;
  const { body } = req;

  try {
    const validator = await addUserSchema(body);

    const { value, error } = validator.validate(body);

    if (error) {
      return res.status(4001).json(error.details);
    }

    const { name, email, password } = value;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    newUser.save();

    await sendVerificationLink(
      email,
      name,
      "https://www.passportjs.org/packages/"
    );

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(401).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  //const { email, password } = req.body;
  const { body } = req;
  try {
    const validator = await loginSchema(body);
    const { value, error } = validator.validate(body);

    if (error) {
      return res.status(4001).json(error.details);
    }

    const { email, password } = value;

    const user = await User.findOne({ email }, { _id: 0, _v: 0 }).select(
      "+password"
    );

    if (!user) {
      return res.status(4001).json("User with that email doesn`t exist");
    }

    const result = await bcrypt.compare(password, user.password);

    if (result) {
      const sightData = {
        name: user.name,
        id: user.id,
      };

      const token = jwt.sign(sightData, process.env.JWT_SECRET!);

      return res.status(200).json({ ...sightData, token });
    }
  } catch (error) {
    return res.status(401).json(error);
  }
};
