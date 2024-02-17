import mongoose from "mongoose";

import * as joi from "joi";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlenght: 25,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 5,
      maxlenght: 25,
    },
    password: {
      trim: true,
      type: String,
      required: true,
      minlength: 8,
    },
  },
  { timestamps: true },
);

interface UserData {
  username: string;
  email: string;
  password: string;
}

const verifyRegister = (obj : UserData) => {
  console.log(typeof obj)
  const Schema = joi.object<UserData>({
    username: joi.string().min(5).max(25).required().trim(),
    email: joi.string().min(5).max(25).required().trim(),
    password: joi.string().min(8).required().trim(),
  });
  return Schema.validate(obj);
};

const User = mongoose.model("user", userSchema);
export { User, verifyRegister };
