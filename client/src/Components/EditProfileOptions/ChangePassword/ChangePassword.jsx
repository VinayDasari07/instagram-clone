import React, { useState } from "react";
import { axiosConfig } from "../../../config-files/axios.config";
import axios from "axios";
import "./ChangePassword.css";


export const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const changePasswordClick = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Password does not match");
    }
    const changePasswordObj = {
      oldPassword,
      newPassword,
    };
    console.log(changePasswordObj);
    axios
      .post("/api/change-password", changePasswordObj, axiosConfig)
      .then((res) => {
        alert("Done")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="change-password">
      <div className="old-password">
        <label className="label" htmlFor="old-password">
          Old Password
        </label>
        <input
          type="password"
          name="old-password"
          id="old-password"
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <div className="new-password">
        <label className="label" htmlFor="new-password">
          New Password
        </label>
        <input
          type="password"
          name="new-password"
          id="new-password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="confirm-new-password">
        <label className="label" htmlFor="confirm-new-password">
          Confirm New <br /> Password
        </label>
        <input
          type="password"
          name="confirm-new-password"
          id="confirm-new-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className="btn-center">
        <button
          className="submit-btn"
          type="submit"
          onClick={(e) => changePasswordClick(e)}
        >
          Change Password
        </button>
      </div>
    </div>
  );
};
