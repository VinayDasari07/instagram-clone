import React from "react";
import "./ChangePassword.css";

export const ChangePassword = () => {
  return (
    <div className="change-password">
      <div className="old-password">
        <label className="label" htmlFor="old-password">
          Old Password
        </label>
        <input type="password" name="old-password" id="old-password" />
      </div>
      <div className="new-password">
        <label className="label" htmlFor="new-password">
          New Password
        </label>
        <input type="password" name="new-password" id="new-password" />
      </div>
      <div className="confirm-new-password">
        <label className="label" htmlFor="confirm-new-password">
          Confirm New <br /> Password
        </label>
        <input
          type="password"
          name="confirm-new-password"
          id="confirm-new-password"
        />
      </div>
      <div className="btn-center">
        <button className="submit-btn" type="submit">
          Change Password
        </button>
      </div>
    </div>
  );
};
