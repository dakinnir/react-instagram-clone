/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const UserContext = React.createContext();

export const UserContextProvider = ({ children }) => {

  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // listen for changes when user value changes
      if (currentUser) {
        setUser(currentUser);

      } else {
        setUser(null);
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])


  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const getUser = () => {
    return auth.currentUser
  }

  const logout = () => {
    signOut(auth)
    setUser(null)
  };

  const values = {    
    getUser,
    login,
    logout,
    signUp };
  return <UserContext.Provider value={values}>{ children}</UserContext.Provider>;
};

export const useAuth = () => {
  return useContext(UserContext);
};
