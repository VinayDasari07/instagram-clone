import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const LikeSchema = new mongoose.Schema({
  LikeId: {
    type: ObjectId,
    required: true,
  },
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  LikedOn: {
    type: Date,
    default: Date.now,
  },
});

const LikeDetail = mongoose.model("Like", LikeSchema);

export { LikeDetail };
