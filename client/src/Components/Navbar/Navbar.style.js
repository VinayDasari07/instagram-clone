import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #fafafa;
  width: 100%;
  order: 0;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  padding: 0;
  margin: 0;
  position: relative;
  align-items: stretch;
  border: 2px solid #e6e6e6;
  box-sizing: border-box;
  flex-basis: 55px;
`;

export const NavContent = styled.div`
  background-color: #fafafa;
  width: 100%;
  order: 0;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  padding: 0 20px;
  margin: 0 auto;
  align-items: center;
  max-width: 970px;
  height: 54px;
`;

export const LogoText = styled.h2`
  flex: 1 9999 0%;
  min-width: 40px;
  font-family: 'Lobster Two', cursive;
`;

export const LinkToHome = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;

export const InstagramTextWrapper = styled.div`
  flex: 0 0 auto;
  justify-content: flex-start;
  flex-direction: row;
  align-content: stretch;
  align-items: center;
`;

export const InstagramText = styled.div`
  margin-top: 7px;
  transition: opacity 0.1s ease-out;
`;

export const NavBarSearch = styled.div`
  height: 28px;
  flex: 0 1 auto;
  min-width: 125px;
  width: 215px;
  position: relative;
`;

export const NavBarSearchContainer = styled.div`
  position: relative;
`

export const NavBarSearchIcon = styled.div`
  position: absolute;
  top: 1px;
  left: 32%;
  z-index: 3;
`

export const NavBarSearchInput = styled.input`
  font-size: 16px;
  background-color: rgba(250, 250, 250, 1);
  border: solid 1px rgba(219, 219, 219, 1);
  border-radius: 3px;
  color: rgba(38, 38, 38, 1);
  outline: 0;
  padding: 3px 10px 3px 26px;
  z-index: 2;
  box-sizing: border-box;
  height: 28px;
  width: 100%;
  line-height: 18px;
  text-align: center;
  &:focus {
    position: absolute;
    text-align: left;
    z-index: 5;
  }
`;

export const RightMenus = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex: 1 0 0%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
`;
export const RightMenuContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 24px;
  white-space: nowrap;
`;
export const HomeBTN = styled.div`
  align-items: stretch;
  border: 0 solid #000;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0;
  padding: 0;
  position: relative;
  cursor: pointer;
`;

export const ProfileImageContainer = styled.span`
  margin-left: 22px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-color: #fafafa;
  border-radius: 50%;
  box-sizing: border-box;
  display: block;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const LogOutSpan = styled.span`
  margin-left: 22px;
  cursor: pointer;
  background-color: #fafafa;
  box-sizing: border-box;
  display: block;
  flex: 0 0 auto;
  overflow: hidden;
  position: relative;
`;