import mongoose from "mongoose";
import { IVerification } from "types";

const { Schema } = mongoose;

const verificationSchema = new Schema<IVerification>({
  hash: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
  },
});

const Verification = mongoose.model("Verification", verificationSchema);

export default Verification;
