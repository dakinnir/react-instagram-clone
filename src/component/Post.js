import React from "react";
import AvatarHeader from "./AvatarHeader";

import './css/Post.styles.css'

const Post = ({ post, id }) => {
  return (
    <div className='post__container' key={id}>
      <AvatarHeader username={post.username} />
      <div className='post__imageContainer'>
        <img className='post__image' src={post.image} alt='' />
      </div>
      <div className='caption'>
        <p>
          <span className='semibold'>{post.username} </span>
          {post.caption}
        </p>
      </div>
    </div>
  );
};

export default Post;
