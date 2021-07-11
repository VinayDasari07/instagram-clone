import React, { useState, useContext } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux" 
import { Link } from "react-router-dom";
import localization from "../localization.json";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { axiosConfig } from "..//..//config-files/axios.config.js";

export const Login = () => {
  
  // const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const loginLocalization = localization.LoginComponent;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isUserAdded, setIsUserAdded] = useState(false);

  const checkLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }
    // const result = await axios.post("/api/login", { email, password }, axiosConfig)
    // const data = await result.data
    // localStorage.setItem("token", data.token);
    // dispatch({ type: "USER", payload: data.user });

    axios.post("/api/login", { email, password }, axiosConfig)
      .then((res) => {
        console.log(`res.data.token`)
        console.log(res.data.token)
        localStorage.setItem("token", res.data.token);
        // dispatch(res.data.user);
        dispatch({ type: "USER", payload: res.data.user });
        
        // setIsUserAdded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  

  return (
  <>
    {/* {(isUserAdded || user) && <Redirect to="/user-feed"></Redirect>} */}
    <div className="container-fluid">
      <div className="login-wrapper">
        <div className="logo-text">{loginLocalization.instagram}</div>
        <form
          className="login-form"
          onSubmit={(e) => checkLogin(e)}
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
  </>
  );
};
