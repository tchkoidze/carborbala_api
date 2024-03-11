import mongoose from "mongoose";
import { CarTypes } from "types";

const carShema = new mongoose.Schema<CarTypes>({
  id: {
    type: mongoose.Schema.Types.Number,
    required: true,
  },
  model: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  type: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  price: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  img: {
    type: mongoose.Schema.Types.String,
  },
});
