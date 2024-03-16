import Joi from "joi";

interface LoginType {
  email: string;
  password: string;
}

const loginSchema = async (data: LoginType) => {
  return Joi.object<LoginType>({
    email: Joi.string().min(3).required(),
    password: Joi.string().min(7).max(15).required(),
  });
};

export default loginSchema;
