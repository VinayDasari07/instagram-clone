import React, { useContext } from "react";
import * as style from "./UserProfile.styles";
import localization from "../localization.json";
import Post from "./Post/Post";
import {UserContext } from "../../App"

function UserProfile() {
  const {state, dispatch} = useContext(UserContext)
  const user = state
  const userProfileLocalization = localization.UserProfileComponent;
  let postList = [
    {
      ImageUrl: "https://source.unsplash.com/user/erondu/282x282",
      caption: "Abc",
      comment: [{ user: "abc", commentText: "text" }],
      like: [{ user: "abc" }, { user: "abc" }, { user: "abc" }],
      postedOn: "20-7-2021",
    },
    {
      ImageUrl: "https://source.unsplash.com/user/erondu/282x282",
      caption: "Abc",
      comment: [],
      like: [{ user: "abc" }],
      postedOn: "20-7-2021",
    },
    {
      ImageUrl: "https://source.unsplash.com/user/erondu/282x282",
      caption: "Abc",
      comment: [{ user: "abc", commentText: "text" }],
      like: [{ user: "abc" }],
      postedOn: "20-7-2021",
    },
    {
      ImageUrl: "https://source.unsplash.com/user/erondu/282x282",
      caption: "Abc",
      comment: [{ user: "abc", commentText: "text" }],
      like: [{ user: "abc" }],
      postedOn: "20-7-2021",
    },
    {
      ImageUrl: "https://source.unsplash.com/user/erondu/282x282",
      caption: "Abc",
      comment: [
        { user: "abc", commentText: "text" },
        { user: "abc", commentText: "text" },
      ],
      like: [{ user: "abc" }],
      postedOn: "20-7-2021",
    },
  ];
  return (
    <div>
      <style.ProfileContent>
        <style.HeaderContent>
          <style.ProfileImageContainer>
            <style.ProfileImage
              alt="test"
              src={
                user && user.ProfileImage
                  ? user.ProfileImage
                  : "https://source.unsplash.com/user/erondu/150x150"
              }
            ></style.ProfileImage>
          </style.ProfileImageContainer>
          <style.UserDataContainer>
            <style.UserNameSection>
              <style.UserNameSectionH2>
                {user && user.UserName ? user.UserName : ""}
              </style.UserNameSectionH2>
              <style.UserNameSectionButton>
                {userProfileLocalization.editProfile}
              </style.UserNameSectionButton>
            </style.UserNameSection>
            <style.UserFollowerSection>
              <style.UserFollowerSectionText>
                <style.UserFollowerSectionNumber>
                  7
                </style.UserFollowerSectionNumber>
                {userProfileLocalization.posts}
              </style.UserFollowerSectionText>
              <style.UserFollowerSectionText>
                <style.UserFollowerSectionNumber>
                  {user && user.Followers && user.Followers.length
                    ? user.Followers.length
                    : 0}
                </style.UserFollowerSectionNumber>
                {userProfileLocalization.follower}
              </style.UserFollowerSectionText>
              <style.UserFollowerSectionText>
                <style.UserFollowerSectionNumber>
                  {user && user.Following && user.Following.length
                    ? user.Following.length
                    : 0}
                </style.UserFollowerSectionNumber>
                {userProfileLocalization.following}
              </style.UserFollowerSectionText>
            </style.UserFollowerSection>
            <style.UserBioSection>
              <p>{user && user.Bio ? user.Bio : "Bio"}</p>
            </style.UserBioSection>
          </style.UserDataContainer>
        </style.HeaderContent>
        <style.PostContainer>
          {postList.map((post) => {
            return <Post post={post} user={user} />;
          })}
        </style.PostContainer>
      </style.ProfileContent>
    </div>
  );
}

export default UserProfile;
