import React, { useState, useContext } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import localization from "../localization.json";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { axiosConfig } from "..//..//config-files/axios.config.js";
import { UserContext } from "../../App";

function Signup() {
  const signUpLocalization = localization.SignUpComponent;
  const [isUserAdded, setIsUserAdded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const { state, dispatch } = useContext(UserContext);
  const user = state;

  const addUser = (e) => {
    e.preventDefault();
    if (!email || !password || !userName || !name) {
      alert("Please enter all details");
      return;
    }
    const newUser = {
      userName,
      password,
      name,
      email,
    };

    axios
      .post("/api/signup", newUser, axiosConfig)
      .then((res) => {
        console.log(res);
        setIsUserAdded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isUserAdded) {
    return <Redirect to="/login"></Redirect>;
  }
  if (user) {
    return <Redirect to="/user-feed"></Redirect>;
  }

  return (
    <div className="container-fluid">
      <div className="login-wrapper">
        <div className="logo-text">{signUpLocalization.instagram}</div>
        <div className="sign-up-info-text background-white">
          {signUpLocalization.signUpInfoText}
        </div>
        <form className="login-form" onSubmit={(e) => addUser(e)}>
          <input
            type="text"
            className="form-control font-size-login"
            id="staticEmail"
            placeholder={signUpLocalization.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="form-control font-size-login"
            id="staticFullName"
            placeholder={signUpLocalization.fullName}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="form-control font-size-login"
            id="staticUserName"
            placeholder={signUpLocalization.userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            className="form-control font-size-login"
            id="inputPassword"
            placeholder={signUpLocalization.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="form-control btn btn-primary login-btn"
          >
            {signUpLocalization.signUpText}
          </button>
        </form>
        <span className="policy-text background-white">
          {signUpLocalization.policy}
        </span>
      </div>
      <div className="sign-up-wrapper background-white">
        <div className="sign-up-text">
          <p className="background-white">
            {signUpLocalization.haveAccount}
            <Link className="sign-up-link background-white" to="/login">
              {signUpLocalization.logInText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
