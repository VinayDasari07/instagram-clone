import styled from "styled-components";

export const PostShadow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.3);
  display: none;
  cursor: pointer;
  width: 281px;
`;

export const PostRoot = styled.div`
  position: relative;
  &:hover ${PostShadow} {
    display: flex;
    
  }
`;

export const PostImage = styled.img`
  height: 281px;
  width: 281px;
`;

export const LikeCommentContainer = styled.li`
  display: flex;
  background-color: transparent;
  font-size: 20px;
`;

export const LikeCommentUL = styled.ul`
  background-color: transparent;
  color: white;
  margin: 0;
  padding: 0 20px 0 0;
`;

export const ImageIcons = styled.img`
  height: 30px;
  width: 30px;
  background-color: transparent;
  margin-right: 5px;
`;
