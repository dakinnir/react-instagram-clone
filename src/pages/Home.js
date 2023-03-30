/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./css/Home.styles.css";
import Post from "../component/Post";
import AppNameLogo from "../component/AppNameLogo";
import InstagramEmbed from "react-instagram-embed";
import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      username: "damil4re",
      image:
        "https://about.fb.com/wp-content/uploads/2022/08/03_Use-Favorites-and-Following.jpg?resize=890%2C816",
      caption: "This is an instagram clone!",
    },
    {
      username: "cwallamerican",
      image:
        "https://pbs.twimg.com/media/FjYxYpzWQAIUH5C?format=jpg&name=large",
      caption: "All American tonight!",
    },
    {
      username: "cristiano",
      image:
        "https://i.guim.co.uk/img/media/31abcbea30606f80c019f3fb9904c211b7381063/0_134_3500_2101/master/3500.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=96c9be0e63171df309a27dde3084bfb7",
      caption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ab quibusdam ipsa earum corrupti delectus voluptatibus placeat.",
    },
  ]);
  return (
    <div className='home__container'>
      <div className='home__header'>
        <AppNameLogo height='45px' />
        <div style={{display: "flex", alignItems: "center", gap: '10px'}}>
          <input type='text' placeholder='Search' />
          <button className='post__btn'><AiOutlinePlus /></button>
        </div>
      </div>
      <div className='home__posts'>
        {posts.map((post, i) => {
          return <Post post={post} id={i} />;
        })}
      </div>
      {/* <InstagramEmbed
        url='https://www.instagram.com/damil4re/'
        clientAccessToken='123|456'
        maxWidth={320}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      /> */}
    </div>
  );
};

export default Home;
