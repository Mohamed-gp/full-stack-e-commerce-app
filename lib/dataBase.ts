import mongoose from "mongoose";

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // dbName: "share_prompt",
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log("connected successful to Ecommerce Db");
  } catch (error) {
    console.log("failed connectToDb", error);
  }
};
