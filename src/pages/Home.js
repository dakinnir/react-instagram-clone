/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import InstagramEmbed from "react-instagram-embed";
import {
  addDoc,
  collection,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import Modal from "react-modal";

import "./css/Home.styles.css";
import { db } from "../firebase";
import { modalCustomStyles } from "../utils/constants";
import Header from "../component/Header";
import PostsList from "../component/PostsList";
import { useAuth } from "../hooks/context/UserContext";
import { redirect } from "react-router-dom";

import { UploadButton } from "react-uploader";
import { Uploader } from "uploader"; // Installed by "react-uploader".

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free", // Get production API keys from Upload.io
});

// custom styles for the modal overlay
Modal.defaultStyles.overlay.backgroundColor = "rgb(0, 0, 0, 0.8)";
Modal.defaultStyles.overlay.overflowY = "hidden";
Modal.defaultStyles.overlay.height = "100vh";

const Home = () => {
  // auth
  const { getUser } = useAuth();
  const user = getUser();

  // feed posts
  const [posts, setPosts] = useState([]);
  const [sortedPosts, setSortedPosts] = useState(posts);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [caption, setCaption] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  let subtitle;

  // open and close modal functionality: setting the modalIsOpen state value
  const closeModal = () => setIsOpen(false);
  const openModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setSortedPosts(posts.sort((p1, p2) => p1.timestamp > p2.timestamp));
  }, [posts]);

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "white";
  };

  useEffect(() => {
    // fetch the posts collection documents
    const fetchPosts = async () => {
      const postData = [];
      const querySnapshot = await getDocs(collection(db, "posts"));
      // map each doc to the posts

      querySnapshot.forEach((doc) =>
        postData.push({ ...doc.data(), id: doc.id })
      );
      setPosts(postData);
    };
    fetchPosts();
  }, [sortedPosts]);

  const fileUploadHandler = (files) => {
    if (files.length === 0) {
      console.log("No files selected.");
    } else if (files.length === 1) {
      setImageUrl(files[0].fileUrl);
    } else {
      return;
    }
  };

  const addPost = async (username, caption, imageUrl) => {
    console.log(username, caption, imageUrl);
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        username: username,
        caption: caption,
        image: imageUrl,
        created: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  const createPostHandler = (event) => {
    event.preventDefault();
    // required values unsatisfied
    if (caption === "" || imageUrl === "") {
      alert("Please add the picture required and caption!");
      return;
    } else {
      // creating post functionality
      addPost(user.email, caption, imageUrl);
      setIsOpen(false);
    }
  };

  if (!user) {
    redirect("/sign-in");
  } else {
    return (
      <div className='home__container'>
        {/* Modal */}
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={modalCustomStyles}
          shouldCloseOnOverlayClick={true}
          contentLabel='Example Modal'
        >
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Create new post</h2>
          <form action=''>
            <div className='modal__controls'>
              <input
                type='text'
                placeholder='Enter your caption...'
                name='caption'
                onChange={(event) => {
                  setCaption(event.target.value);
                }}
              />
              {/* File Uploader */}
              <UploadButton
                uploader={uploader}
                options={{ multi: false }}
                onComplete={fileUploadHandler}
              >
                {({ onClick }) => (
                  <button onClick={onClick}>Upload Image</button>
                )}
              </UploadButton>
              <img src={imageUrl} alt='No File Selected' />
              <button onClick={createPostHandler}>Post</button>
            </div>
          </form>
        </Modal>
        <div className='home__grid'>
          <Header openModalHandler={openModal} />
          <PostsList posts={sortedPosts} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "40px"
            }}
          >
            Instagram Embed
          </div>
          {/* <InstagramEmbed
            url={`https://www.instagram.com/p/CPEJHAojkP9/`}
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
      </div>
    );
  }
};

export default Home;
