import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavContent,
  LogoText,
  LinkToHome,
  InstagramTextWrapper,
  InstagramText,
  NavBarSearch,
  NavBarSearchInput,
  RightMenus,
  RightMenuContent,
  HomeBTN,
  ProfileImage,
  ProfileImageContainer,
  NavBarSearchIcon,
  NavBarSearchContainer,
} from "./Navbar.style";
import { useSelector, useDispatch } from "react-redux";
import { BsPower, BsSearch } from "react-icons/bs";

export const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const removeTokenFromLocalStroage = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch({ type: "CLEAR" });
    window.location.reload();
  };

  return (
    <Nav>
      <NavContent>
        <LogoText>
          <LinkToHome href="/">
            <InstagramTextWrapper>
              <InstagramText>Instagram</InstagramText>
            </InstagramTextWrapper>
          </LinkToHome>
        </LogoText>
        <NavBarSearch>
          <NavBarSearchContainer>
            <NavBarSearchInput
              type="text"
              placeholder="Search"
            ></NavBarSearchInput>
          </NavBarSearchContainer>
          <NavBarSearchIcon>
            <BsSearch size="12" />
          </NavBarSearchIcon>
        </NavBarSearch>
        <RightMenus>
          <RightMenuContent>
            <HomeBTN>
              <LinkToHome href="/">
                <svg
                  aria-label="Home"
                  fill="#262626"
                  height="22"
                  viewBox="0 0 48 48"
                  width="22"
                >
                  <path d="M45.5 48H30.1c-.8 0-1.5-.7-1.5-1.5V34.2c0-2.6-2.1-4.6-4.6-4.6s-4.6 2.1-4.6 4.6v12.3c0 .8-.7 1.5-1.5 1.5H2.5c-.8 0-1.5-.7-1.5-1.5V23c0-.4.2-.8.4-1.1L22.9.4c.6-.6 1.6-.6 2.1 0l21.5 21.5c.3.3.4.7.4 1.1v23.5c.1.8-.6 1.5-1.4 1.5z"></path>
                </svg>
              </LinkToHome>
            </HomeBTN>
            <ProfileImageContainer>
              <Link to="/user-profile">
                <ProfileImage src={user.pic}></ProfileImage>
              </Link>
            </ProfileImageContainer>
            <ProfileImageContainer>
              <BsPower
                onClick={(e) => {
                  removeTokenFromLocalStroage(e);
                }}
                size="24"
              />
            </ProfileImageContainer>
          </RightMenuContent>
        </RightMenus>
      </NavContent>
    </Nav>
  );
};
