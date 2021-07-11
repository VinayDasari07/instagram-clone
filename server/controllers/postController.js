import { PostDetailModel } from "../models/PostDetailModel.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants/constants.js";

const createPostController = async (req, res) => {
  const { title, body, ImageUrl, caption } = req.body;
  if (!title || !body) {
    return res.status(422).json({ error: "Please add all the details. " });
  }
  const post = new PostDetailModel({
    title,
    body,
    UserId: req.user,
    ImageUrl,
    caption
  })
  post.save().then(result => {
    res.json({post: result})
  })
  .catch(err => {
    console.log(err)
  })
};

const getAllPostController = async(req,res) => {
    PostDetailModel.find()
    .populate("UserId", "_id Name")
    .then(posts => {
      res.json({posts})
    })
    .catch(err => {
      console.log(err)  
    })
}

const getMyPostController = async(req, res) => {
  PostDetailModel.find({UserId: req.user._id})
  .populate("UserId", "_id name")
  .then(mypost => {
    res.json({mypost})
  })
  .catch(err=>{
    console.log(err)
  })

}



export { createPostController, getAllPostController, getMyPostController };
