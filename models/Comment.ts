import connectDB from "@/lib/dataBase";
import mongoose from "mongoose";

const CommentModel = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },

    // to do stars => rating
  },
  {
    timestamps: true,
  },
);

const Comment =
  mongoose.models.comment || mongoose.model("comment", CommentModel);

export { Comment };
connectDB()
