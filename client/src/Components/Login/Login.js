import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import localization from "../localization.json";

export const Login = () => {
  const loginLocalization = localization.LoginComponent;

  return (
    <div className="container-fluid">
      <div className="login-wrapper">
        <div className="logo-text">{loginLocalization.instagram}</div>
        <div className="login-form">
          <input
            type="text"
            className="form-control font-size-login"
            id="staticEmail"
            placeholder={loginLocalization.userName}
          />
          <input
            type="password"
            className="form-control font-size-login"
            id="inputPassword"
            placeholder={loginLocalization.password}
          />
          <button
            type="submit"
            className="form-control btn btn-primary login-btn"
          >
            {loginLocalization.logInText}
          </button>
        </div>
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
}