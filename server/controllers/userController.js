import { UserDetailModel } from "../models/UserDetailModel.js";

const signupController = async (req, res) => {
  const UserDetail = new UserDetailModel({
    UserName: req.body.UserName,
    EmailId: req.body.EmailId,
    Password: req.body.Password,
    Name: req.body.Name,
    Bio: req.body.Bio,
  });
  try {
    const userDetailsSaved = await UserDetail.save();
    res.json(userDetailsSaved);
  } catch (err) {
    res.json({ message: err });
  }
};

const loginController = async (req, res) => {
  console.log(req.params.userId);
  try {
    const userId = await UserDetailModel.findById(req.params.userId);
    res.json(userId);
  } catch (err) {
    res.json({
      message: err,
    });
  }
};

export { signupController, loginController };
