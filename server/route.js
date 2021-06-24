import express from "express";
import {
  signupController,
  loginController,
} from "./controllers/userController.js";
// import { loginController } from "./controllers/loginController.js"

const router = express.Router();

// define the home page route
router.get("/", function (req, res) {
  res.send("API Home Page");
});
// define the singup route
router.post("/signup", signupController);

// define the login route
router.get("/login/:userId", loginController);

export { router };
