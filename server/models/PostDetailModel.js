import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const PostSchema = new mongoose.Schema({
  UserId: {
    type: ObjectId,
    ref: "UserDetail",
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
      User: {
        type: ObjectId,
        ref: "UserDetail",
      },
      commentText: {
        type: String
      }
    },
  ],
  like: [
    {
      type: ObjectId,
      ref: "UserDetail",
    },
  ],
});

const PostDetailModel = mongoose.model("PostDetail", PostSchema);

export { PostDetailModel };
