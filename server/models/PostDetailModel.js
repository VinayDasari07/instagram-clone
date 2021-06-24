import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const PostSchema = new mongoose.Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  ImageUrl: {
    type: String,
    required: true,
  },
  PostedOn: {
    type: Date,
    default: Date.now,
  },
  caption: {
    type: String,
    required: true,
  },
  comment: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Like",
    },
  ],
});

const PostDetailModel = mongoose.model("PostDetail", PostSchema);

export { PostDetailModel };
