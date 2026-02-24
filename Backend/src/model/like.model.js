const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: [true, "Post id is required for creating a like"]
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User id is required for creating a like"]
    }
  },
  { timestamps: true }
);

// Prevent duplicate likes
likeSchema.index({ post: 1, user: 1 }, { unique: true });

const Like = mongoose.model("Like", likeSchema);

module.exports = Like;