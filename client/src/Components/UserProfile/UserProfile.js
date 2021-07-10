import React from "react";
import * as style from "./UserProfile.styles";
import localization from "../localization.json";

function UserProfile({ user }) {
  const userProfileLocalization = localization.UserProfileComponent;
  console.log(user);
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
      </style.ProfileContent>
    </div>
  );
}

export default UserProfile;
