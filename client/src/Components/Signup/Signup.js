import React from "react";
import "./Signup.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import localization from "../localization.json";

function Signup() {
  const signUpLocalization = localization.SignUpComponent;

  return (
    <div className="container-fluid">
      <div className="login-wrapper">
        <div className="logo-text">{signUpLocalization.instagram}</div>
        <div className="sign-up-info-text background-white">
          {signUpLocalization.signUpInfoText}
        </div>

        <div className="login-form">
          <input
            type="text"
            className="form-control font-size-login"
            id="staticEmail"
            placeholder={signUpLocalization.email}
          />
          <input
            type="text"
            className="form-control font-size-login"
            id="staticFullName"
            placeholder={signUpLocalization.fullName}
          />
          <input
            type="text"
            className="form-control font-size-login"
            id="staticUserName"
            placeholder={signUpLocalization.userName}
          />
          <input
            type="password"
            className="form-control font-size-login"
            id="inputPassword"
            placeholder={signUpLocalization.password}
          />
          <button
            type="submit"
            className="form-control btn btn-primary login-btn"
          >
            {signUpLocalization.signUpText}
          </button>
        </div>
        {
          <span className="policy-text background-white">
            {signUpLocalization.policy}
          </span>
        }
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
