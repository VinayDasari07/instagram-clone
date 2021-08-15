import React, { useState } from "react";
import "./EditProfile.css";
import { useSelector } from "react-redux";

export const EditProfile = () => {
  const user = useSelector((state) => state.user);
  const [name, setName] = useState(user.name);
  const [username, setUsername] = useState(user.username);
  const [website, setWebsite] = useState(user.website ? user.website : "");
  const [bio, setBio] = useState(user.bio ? user.bio : "");
  const [email, setEmail] = useState(user.email ? user.email : "");
  const [phoneNumber, setPhoneNumber] = useState(
    user.phoneNumber ? user.phoneNumber : ""
  );
  const [gender, setGender] = useState(user.gender ? user.gender : "");


  const updateUserDetails = (e) => {
    e.preventDefault();
    const editUser = {
      name,
      username,
      website,
      bio,
      email,
      phoneNumber,
      gender
    }
    console.log(editUser);
  };

  return (
    <div className="edit-profile">
      <div className="input-container">
        <div className="name">
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="username">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="website">
          <label className="label" htmlFor="website">
            Website
          </label>
          <input
            type="text"
            name="website"
            id="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>
        <div className="bio">
          <label className="label" htmlFor="bio">
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            cols="30"
            rows="3"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </div>
        <div className="email">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="phone-number">
          <label className="label" htmlFor="phone-number">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone-number"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="gender">
          <label className="label" htmlFor="gender">
            Gender
          </label>
          <input
            type="text"
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
      </div>
      <div className="btn-center">
        <button
          className="submit-btn"
          type="submit"
          onClick={(e) => updateUserDetails(e)}
        >
          submit
        </button>
      </div>
    </div>
  );
};
