import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import localization from "../localization.json";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { axiosConfig } from "..//..//config-files/axios.config.js";

export const Login = ({ user, setUser }) => {
  const loginLocalization = localization.LoginComponent;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isUserAdded, setIsUserAdded] = useState(false);

  const checkLogin = (e, email, password) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    axios
      .post("/api/login", { email, password }, axiosConfig)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        setIsUserAdded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (isUserAdded || user) {
    return <Redirect to="/user-feed"></Redirect>;
  }

  return (
    <div className="container-fluid">
      <div className="login-wrapper">
        <div className="logo-text">{loginLocalization.instagram}</div>
        <form
          className="login-form"
          onSubmit={(e) => checkLogin(e, email, password)}
        >
          <input
            type="text"
            className="form-control font-size-login"
            id="staticEmail"
            placeholder={loginLocalization.userName}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control font-size-login"
            id="inputPassword"
            placeholder={loginLocalization.password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="form-control btn btn-primary login-btn"
          >
            {loginLocalization.logInText}
          </button>
        </form>
      </div>
      <div className="sign-up-wrapper background-white">
        <div className="sign-up-text">
          <p className="background-white">
            {loginLocalization.doNotHaveAccount}
            <Link className="sign-up-link background-white" to="/signup">
              {loginLocalization.signUpText}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
