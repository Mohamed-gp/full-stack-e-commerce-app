import mongoose from "mongoose";


if (!process.env.MONGODB_URI) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}


async function connectDB() {
  try {
    mongoose.connect(process.env.MONGODB_URI as string)
    console.log("connected successful to db");
  } catch (error) {
     if (process.env.envirenment == "developement") {
       console.log(error)
     }
  }
}

export default connectDB;