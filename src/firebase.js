// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/*
Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
*/

const firebaseConfig = {
  apiKey: "AIzaSyAl-6EG3fAINqzqNLWzgLTH9IKfQ8uVvB0",
  authDomain: "react-instagram-clone-419f4.firebaseapp.com",
  projectId: "react-instagram-clone-419f4",
  storageBucket: "react-instagram-clone-419f4.appspot.com",
  messagingSenderId: "114933035517",
  appId: "1:114933035517:web:443e0398493b4ee292e994"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)


export {
  db,
  auth
}