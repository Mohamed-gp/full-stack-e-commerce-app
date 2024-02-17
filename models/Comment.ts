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

const Comment = mongoose.model("comment", CommentModel);

export { Comment };
