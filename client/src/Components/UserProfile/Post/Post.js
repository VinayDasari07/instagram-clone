import React from "react";
import * as style from "./Post.style";

function Post({ post }) {
  return (
    <style.PostRoot>
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
  );
}

export default Post;
