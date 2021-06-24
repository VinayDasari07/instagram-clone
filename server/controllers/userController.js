import { UserDetailModel } from "../models/UserDetailModel.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/constants.js";

const signupController = async (req, res) => {
  const { userName, email, password, name } = req.body;
  if (!userName || !email || !password || !name) {
    return res.status(422).json({ error: "Please add all the details. " });
  }
  await UserDetailModel.findOne({
    $or: [{ EmailId: email }, { UserName: userName }],
  })
    .then((user) => {
      if (user) {
        return res
          .status(422)
          .json({ error: "user already exists with that email or user name" });
      }
      //  TODO:- hash password before storing in db
      const userDetail = new UserDetailModel({
        UserName: userName,
        EmailId: email,
        Password: password,
        Name: name,
      });
      userDetail
        .save()
        .then(() => {
          res.status(200).json({ message: "saved" });
        })
        .catch((err) => {
          return res.status(500).json({ error: err });
        });
    })
    .catch((error) => {
      return res.status(500).json({ error: error });
    });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "Please add all the details. " });
  }
  await UserDetailModel.findOne({
    $or: [{ EmailId: email }, { UserName: userName }],
  })
    .then((user) => {
      if (!user) {
        return res
          .status(422)
          .json({ error: "user does not exists with that email or password" });
      }
      if (user.Password === password) {
        const token = jwt.sign({ _id: user._id }, JWT_SECRET);
        const { _id, Name, EmailId, Followers, Following, ProfileImage } = user;
        res.status(200).json({
          token,
          user: {
            _id,
            name: Name,
            email: EmailId,
            followers: Followers,
            following: Following,
            pic: ProfileImage,
          },
        });
      } else {
        return res.status(422).json({ error: "Invalid Email or password" });
      }
    })
    .catch((error) => {
      return res.status(500).json({ error: error });
    });
};

export { signupController, loginController };
