import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const CommentSchema = new mongoose.Schema({
  CommentId: {
    type: ObjectId,
    required: true,
  },
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  comment: {
    type: String,
  },
  CommentedOn: {
    type: Date,
    default: Date.now,
  },
});

const CommentDetail = mongoose.model("Comment", CommentSchema);

export { CommentDetail };
