import styled from "styled-components";

export const DialogBoxContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CrossButton = styled.span`
  font-size: 24px;
  font-weight: 600;
  background-color: transparent;
  color: white;
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

export const DialogContents = styled.div`
  width: 900px;
  height: 550px;
  background-color: white;
  display: flex;
`;

export const DialogContentPostImage = styled.img`
  width: 550px;
  height: 550px;
`;

export const DialogContentPostDetails = styled.div`
  width: 350px;
  height: 550px;
  display: flex;
  flex-direction: column;
`;

export const DialogContentPostDetailHeader = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  border-bottom: 2px solid rgba(239, 239, 239, 1);
  padding: 16px;
  align-items: center;
`;

export const PostDetailHeaderUserProfile = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
export const PostDetailHeaderUserName = styled.div`
  border-radius: 50%;
  flex-grow: 1;
  margin-left: 15px;
`;

export const PostDetailHeaderSpan = styled.span`
  font-weight: 700;
  letter-spacing: 2px;
  padding-bottom: 10px;
  cursor: pointer;
`;

export const DialogContentPostDetailMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px 12px;
`;

export const UserCommentWrapper = styled.div`
  display: flex;
`;

export const CommentUserName = styled.p`
  font-weight: bold;
  font-size: 16px;
`;

export const CommentText = styled.p`
  font-weight: lighter;
  font-size: 16px;
  margin-left: 5px;
`;

export const DialogContentPostDetailFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LikeSectionContainer = styled.div`
  border-bottom: 2px solid rgba(239, 239, 239, 1);
  border-top: 2px solid rgba(239, 239, 239, 1);
  padding: 10px 10px 10px 20px;
  display: flex;
  align-items: center;
`;

export const LikeSection = styled.section`
  display: flex;
  width: 100%;
`;

export const LikeIcon = styled.img`
  width: 30px;
`;

export const LikeBy = styled.span`
  margin-left: 10px;
`;

export const CommentInputContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  padding: 16px;
`;

export const CommentInputBox = styled.textarea`
  flex-grow: 1;
  margin-right: 10px;
  resize: none;
  border: 0;
  color: rgba(38, 38, 38, 1);
  display: flex;
  font-size: inherit;
  height: 30px;
  max-height: 80px;
  outline: 0;
  padding: 0;
`;

export const CommentPostButton = styled.button`
  border: 0px;
  color: rgba(0, 149, 246, 1);
  font-weight: 600;
  text-align: center;
  text-transform: inherit;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 18px;
`;
