import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
  UserName: {
    type: String,
    required: true,
  },
  EmailId: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Bio: {
    type: String,
  },
  ProfileImage: {
    type: String,
    default:
      "https://brighterwriting.com/wp-content/uploads/icon-user-default-420x420.png",
  },
  Followers: [
    {
      type: ObjectId,
      ref: "UserDetail",
    },
  ],
  Following: [
    {
      type: ObjectId,
      ref: "UserDetail",
    },
  ],
});

const UserDetailModel = mongoose.model("UserDetail", UserSchema);

export { UserDetailModel };
