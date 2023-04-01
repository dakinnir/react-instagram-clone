import React from "react";
import Post from "./Post";

const PostsList = ({ posts }) => {
  if (posts.length < 1 || posts === null) {
    return (
      <div style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
        <p>No Posts</p>
      </div>
    );
  }
  return (
    <div className='home__posts'>
      {posts.map((post, i) => {
        return <Post post={post} key={i} />;
      })}
    </div>
  );
};

export default PostsList;
