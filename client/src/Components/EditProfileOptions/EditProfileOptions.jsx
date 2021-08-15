import React, { useState } from "react";
import { ChangePassword } from "./ChangePassword/ChangePassword";
import { EditProfile } from "./EditProfile/EditProfile";
import { useSelector } from "react-redux";
import "./EditProfileOptions.css";

export const EditProfileOptions = () => {
  const [editProfile, setEditProfile] = useState(true);
  const user = useSelector((state) => state.user);
  return (
    <div className="main">
      <div className="edit-profile-container">
        <div className="options">
          <p
            className={editProfile ? "edit-profile-active" : ""}
            onClick={() => {
              setEditProfile(true);
            }}
          >
            Edit Profile
          </p>
          <p
            className={editProfile ? "" : "change-password-active"}
            onClick={() => {
              setEditProfile(false);
            }}
          >
            Change Password
          </p>
        </div>
        <div className="edit-container">
          <div className="user-profile">
            <div className="image-container">
              <img src={user.pic} alt="" />
            </div>
            <div className="user-name">
              <p>hitesh sankhat</p>
              {editProfile ? <button>Change Profile Photo</button> : ""}
            </div>
          </div>
          {editProfile ? <EditProfile /> : <ChangePassword />}
        </div>
      </div>
    </div>
  );
};
