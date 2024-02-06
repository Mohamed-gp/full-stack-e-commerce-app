import mongoose from "mongoose";

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
      minlength : 8,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export { User };
