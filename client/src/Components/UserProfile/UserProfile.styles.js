import styled from "styled-components";

export const ProfileContent = styled.div`
  width: 900px;
  margin: 30px auto 0;
  display: flex;
  flex-direction: column;
`;

export const HeaderContent = styled.header`
  width: 100%;
  height: 150px;
  display: flex
`;
export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1
`;

export const ProfileImage = styled.img`
  object-fit: none;
  border-radius: 50%;
`;

export const UserDataContianer = styled.div`
  flex-grow: 3;
  display: flex;
  flex-direction: column;
`;
export const UserNameSection = styled.div`
  display: flex;
  height: 40px;
  margin-bottom: 20px;
`;

export const UserFollowerSection = styled.div`
  display: flex;
  height: 18px;
  margin-bottom: 20px;
`;


export const UserBioSection = styled.div`
  display: flex;
`;

