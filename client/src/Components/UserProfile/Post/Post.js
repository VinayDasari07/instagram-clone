import React, { useState } from "react";
import * as style from "./Post.style";
import PostDialog from "./PostDialog/PostDialog";

function Post({ post, user }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const postDialogOpen = () => {
    console.log("work");
    setIsDialogOpen(!isDialogOpen);
  };
  return (
    <>
      <style.PostRoot onClick={postDialogOpen}>
        <style.PostImage src={post.ImageUrl}></style.PostImage>
        <style.PostShadow>
          <style.LikeCommentContainer>
            <style.LikeCommentUL>
              <style.ImageIcons src="/icons\outline_favorite_white_24dp.png"></style.ImageIcons>
              {post.like.length}
            </style.LikeCommentUL>
            <style.LikeCommentUL>
              <style.ImageIcons src="/icons\baseline_chat_white_24dp.png"></style.ImageIcons>
              {post.comment.length}
            </style.LikeCommentUL>
          </style.LikeCommentContainer>
        </style.PostShadow>
      </style.PostRoot>
      {isDialogOpen ? (
        <PostDialog post={post} user={user} setIsDialogOpen={setIsDialogOpen} />
      ) : (
        ""
      )}
    </>
  );
}

export default Post;
