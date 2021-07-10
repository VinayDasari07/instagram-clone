import React from "react";
import * as style from "./PostDialog.styles";

const PostDialog = ({ post, user, setIsDialogOpen }) => {
  console.log(post);
  return (
    <style.DialogBoxContainer>
      <style.CrossButton
        onClick={() => {
          setIsDialogOpen();
        }}
      >
        X
      </style.CrossButton>
      <style.DialogContents>
        <style.DialogContentPostImage
          src={post.ImageUrl}
        ></style.DialogContentPostImage>
        <style.DialogContentPostDetails>
          <style.DialogContentPostDetailHeader>
            <style.PostDetailHeaderUserProfile
              src={user.ProfileImage}
            ></style.PostDetailHeaderUserProfile>
            <style.PostDetailHeaderUserName>
              {user.UserName}
            </style.PostDetailHeaderUserName>
            <style.PostDetailHeaderSpan>...</style.PostDetailHeaderSpan>
          </style.DialogContentPostDetailHeader>
          <style.DialogContentPostDetailMain>
            {post.comment.map((commentRef) => {
              return (
                <style.UserCommentWrapper>
                  <style.CommentUserName>
                    {commentRef.user}
                  </style.CommentUserName>
                  <style.CommentText>
                    {commentRef.commentText}
                  </style.CommentText>
                </style.UserCommentWrapper>
              );
            })}
          </style.DialogContentPostDetailMain>
          <style.DialogContentPostDetailFooter>
            <style.LikeSectionContainer>
              <style.LikeSection>
                <style.LikeIcon src="/icons\favorite_black_24dp.svg"></style.LikeIcon>
                <style.LikeBy>Liked by</style.LikeBy>
              </style.LikeSection>
            </style.LikeSectionContainer>
            <style.CommentInputContainer>
              <style.CommentInputBox placeholder="Add a Comment"></style.CommentInputBox>
              <style.CommentPostButton>Post</style.CommentPostButton>
            </style.CommentInputContainer>
          </style.DialogContentPostDetailFooter>
        </style.DialogContentPostDetails>
      </style.DialogContents>
    </style.DialogBoxContainer>
  );
};
export default PostDialog;
