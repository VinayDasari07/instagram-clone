import express from "express";
import {
  signupController,
  loginController,
  currentUser,
} from "./controllers/userController.js";
import { loginCheck } from "./middleware/loginCheck.js";

const router = express.Router();

// define the home page route
router.get("/", function (req, res) {
  res.send("API Home Page");
});
// define the singup route
router.post("/signup", signupController);

// define the login route
router.post("/login", loginController);

router.get("/get-logged-in-user", loginCheck, currentUser);

export { router };
