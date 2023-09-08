import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
    role: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

export default model("User", userSchema);
