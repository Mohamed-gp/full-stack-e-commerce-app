import mongoose from "mongoose";
import joi from "joi";
import connectDB from "@/lib/dataBase";
import { user } from "../types/interfaces";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 25, // Fixed typo here
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 5,
      maxlength: 25, // Fixed typo here
    },
    password: {
      trim: true,
      type: String,
      required: true,
      minlength: 8,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const verifyRegister = (obj: user) => {
  const Schema = joi.object<user>({
    username: joi.string().min(5).max(25).required().trim(),
    email: joi.string().min(5).max(25).required().trim(),
    password: joi.string().min(8).required().trim(),
  });
  return Schema.validate(obj);
};

const verifyLogin = (obj: user) => {
  const Schema = joi.object<user>({
    email: joi.string().min(5).max(25).required().trim(),
    password: joi.string().min(8).required().trim(),
  });

  return Schema.validate(obj);
};

const User = mongoose.models.User || mongoose.model("User", userSchema);
export { User, verifyRegister, verifyLogin };
connectDB();
