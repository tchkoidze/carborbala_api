import mongoose from "mongoose";
import { UserType } from "types";
import { v4 as uuid } from "uuid";

const userShema = new mongoose.Schema<UserType>({
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  id: {
    type: mongoose.Schema.Types.String,
    required: true,
    default: uuid,
  },
});

const User = mongoose.model("User", userShema);
export default User;
