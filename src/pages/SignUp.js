import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppNameLogo from "../component/AppNameLogo";
import AuthOption from "../component/AuthOption";
import { useAuth } from "../hooks/context/UserContext";
import "./css/Auth.styles.css";

const SignUp = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { signUp } = useAuth();

  const onInputChangeHandler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  if (state.username === "" || state.email  === "" || state.password  === "") {
    alert("Provide the following credentials");
    return
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    await signUp(state.email, state.password)
      .then((userCredential) => {
        userCredential.user.username = state.username
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className='auth__page'>
      <div className='auth__pageFormContainer'>
        <div className='auth__pageForm padded__border'>
          {/* Form submission */}
          <div className='auth__form'>
            <form action='' onSubmit={handleSubmit}>
              {/* Instagram logo */}
              <div className='auth__formLogoContainer'>
                <AppNameLogo height='65px' />
              </div>
              <div className='auth__formControls'>
                <input
                  className='auth__formInput'
                  type='text'
                  placeholder='Username'
                  name='username'
                  value={state.username}
                  onChange={onInputChangeHandler}
                />
                <input
                  className='auth__formInput'
                  type='email'
                  placeholder='Email'
                  name='email'
                  onChange={onInputChangeHandler}
                  value={state.email}
                />
                <input
                  className='auth__formInput'
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={state.password}
                  onChange={onInputChangeHandler}
                />
                <button type='submit'>Sign up</button>
              </div>
            </form>
          </div>
        </div>
        {/* Option to Sign In */}
        <AuthOption prompt='Have an account?' path='/sign-in' text='Log In' />
      </div>
    </div>
  );
};

export default SignUp;
