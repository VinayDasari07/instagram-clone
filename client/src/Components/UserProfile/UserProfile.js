import React from 'react'
import * as style from './UserProfile.styles'

function UserProfile() {
  return (
    <div>
      <style.ProfileContent>
        <style.HeaderContent>
          <style.ProfileImageContainer>
            <style.ProfileImage alt="test" src="https://source.unsplash.com/user/erondu/150x150">
            </style.ProfileImage>
          </style.ProfileImageContainer>
          <style.UserDataContianer>
            <style.UserNameSection>
              <h2>Hiteshsankhat</h2>
              <button> Edit Profile</button>
            </style.UserNameSection>
            <style.UserFollowerSection>
              <p>post</p>
              <p>post</p>
              <p>post</p>
            </style.UserFollowerSection>
            <style.UserBioSection>
              <p>Bio</p>
            </style.UserBioSection>
          </style.UserDataContianer>
        </style.HeaderContent>
      </style.ProfileContent>
    </div>
  )
}

export default UserProfile
