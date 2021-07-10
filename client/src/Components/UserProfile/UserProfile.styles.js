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
  display: flex;
`;
export const ProfileImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const ProfileImage = styled.img`
  object-fit: none;
  border-radius: 50%;
  height: 150px;
  object-fit: cover;
`;

export const UserDataContainer = styled.div`
  flex-grow: 3;
  display: flex;
  flex-direction: column;
`;

export const UserNameSection = styled.div`
  display: flex;
  font-size: 40px;
  margin-bottom: 20px;
`;

export const UserNameSectionH2 = styled.h2`
  font-size: 28px;
  line-height: 32px;
  font-weight: 300;
  color: rgba(38, 38, 38, 1);
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const UserNameSectionButton = styled.button`
  appearance: none;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  font-weight: 600;
  padding: 5px 9px;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  user-select: none;
  width: auto;
  border-radius: 4px;
  border: 1px solid rgba(219, 219, 219, 1);
  font-size: 12px;
  height: 30px;
  flex: 0 1 auto;
  margin-left: 30px;
  margin-top: 5px;
`;

export const UserFollowerSection = styled.div`
  display: flex;
  height: 18px;
  margin-bottom: 20px;
`;

export const UserFollowerSectionNumber = styled.span`
  color: rgba(38, 38, 38, 1);
  font-weight: 600;
`;

export const UserFollowerSectionText = styled.p`
  font-size: 16px;
  margin-right: 40px;
`;

export const UserBioSection = styled.div`
  display: flex;
  width: auto;
  height: 100%;
`;

export const PostContainer = styled.div`
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid rgba(219, 219, 219, 1);
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 28px;
`;
