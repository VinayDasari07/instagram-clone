import React from "react";
import "./EditProfile.css";

export const EditProfile = () => {
  return (
    <div className="edit-profile">
      <div className="input-container">
        <div className="name">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="username">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input type="text" name="username" id="username" />
        </div>
        <div className="website">
          <label className="label" htmlFor="website">
            Website
          </label>
          <input type="text" name="website" id="website" />
        </div>
        <div className="bio">
          <label className="label" htmlFor="bio">
            Bio
          </label>
          <textarea name="bio" id="bio" cols="30" rows="3"></textarea>
        </div>
        <div className="email">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="phone-number">
          <label className="label" htmlFor="phone-number">
            Phone Number
          </label>
          <input type="tel" name="phone-number" id="phone-number" />
        </div>
        <div className="gender">
          <label className="label" htmlFor="gender">
            Gender
          </label>
          <input type="text" name="gender" id="gender" />
        </div>
      </div>
      <div className="btn-center">
        <button className="submit-btn" type="submit">
          submit
        </button>
      </div>
    </div>
  );
};
