import jwt from "jsonwebtoken";
import { UserDetailModel } from "../models/UserDetailModel.js";
import { JWT_SECRET } from "../constants/constants.js";

export const loginCheck = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "you must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  // UserDetailModel.find().then((userRef) => {
  //   console.log(userRef);
  // })
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "you must be logged in" });
    }

    const { _id } = payload;
    UserDetailModel.findById(_id).then((userRef) => {
      const {
        _id,
        Name,
        UserName,
        EmailId,
        Followers,
        Following,
        ProfileImage,
        Bio,
        Website,
        Gender,
        PhoneNumber
      } = userRef;
      req.user = {
        _id,
        name: Name,
        username: UserName,
        email: EmailId,
        followers: Followers,
        following: Following,
        pic: ProfileImage,
        bio: Bio,
        website: Website,
        gender: Gender,
        phoneNumber: PhoneNumber
      };
      next();
    });
  });
  // next();
};
