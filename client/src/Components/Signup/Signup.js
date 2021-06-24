import React, { useState } from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import localization from "../localization.json";
import { Redirect } from "react-router-dom";

function Signup({ userList }) {
  const signUpLocalization = localization.SignUpComponent;
  const [isUserAdded, setIsUserAdded] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");

  const addUser = (e, email, name, userName, password) => {
    e.preventDefault();
    const user = userList.find(
      (obj) => obj.email === email || obj.userName === email
    );
    if (user) {
      alert("User name or email already exists");
      return;
    }
    const newUser = {
      userName,
      password,
      name,
      email,
    };
    userList = [...userList, newUser];
    console.log(userList);
    setIsUserAdded(true);
  };

  if (isUserAdded) {
    return <Redirect to="/login"></Redirect>;
  }

  return (
    <div className="container-fluid">
      <div className="login-wrapper">
        <div className="logo-text">{signUpLocalization.instagram}</div>
        <div className="sign-up-info-text background-white">
          {signUpLocalization.signUpInfoText}
        </div>
        <form
          className="login-form"
          onSubmit={(e) => addUser(e, userName, password, name, email)}
        >
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
