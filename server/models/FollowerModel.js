import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const FollowerSchema = new mongoose.Schema({
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  IsFollowingUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  FollowedOn: {
    type: Date,
    default: Date.now,
  },
});

const FollowerDetail = mongoose.model("Follower", FollowerSchema);

export { FollowerDetail };
