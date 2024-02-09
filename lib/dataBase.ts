import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1/Ecommerce");
    console.log("connected successful to Ecommerce DB");
  } catch (error) {
    console.log("failed to connect To Db", error);
  }
};
