import mongoose from "mongoose";

const CommentModel = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "product",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    // to do stars => rating    
  },
  {
    timestamps: true,
  },
);

const Comment = mongoose.model("Comment", CommentModel);

export { Comment };
