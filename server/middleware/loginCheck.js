import jwt from "jsonwebtoken";
import { UserDetailModel } from "../models/UserDetailModel.js";
import { JWT_SECRET } from '../constants/constants.js'

export const loginCheck = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "you must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "you must be logged in" });
    }

    const { _id } = payload;
    UserDetailModel.findById(_id).then((userRef) => {
      req.user = userRef;
      next();
    });
  });
  // next();
};
