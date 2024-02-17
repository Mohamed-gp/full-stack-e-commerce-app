import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected successful to Ecommerce DB");
  } catch (error) {
    console.log("failed to connect To Db", error);
  }
};
