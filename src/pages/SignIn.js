import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AppNameLogo from "../component/AppNameLogo";
import AuthOption from "../component/AuthOption";
import "./css/Auth.styles.css";
import { useAuth } from "../hooks/context/UserContext";

const SignIn = () => {
  const { user, login } = useAuth();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  console.log(user);
  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(state.email, state.password)
    .then(() => {
      navigate("/");
    })
    .catch((err) => {
      alert(err.message);
    });
  };

  const onInputChangeHandler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return (
    <div className='auth__page'>
      {/* Image display */}
      <img
        className='auth__pageImage'
        src='https://www.instagram.com//images/instagram/xig/homepage/screenshots/screenshot1-2x.png?__d=www'
        alt=''
      />
      <div className='auth__pageFormContainer'>
        <div className='auth__pageForm padded__border'>
          {/* Form submission */}
          <div className='auth__form'>
            <form action='' onSubmit={handleSubmit}>
              {/* Instagram logo */}
              <div className='center'>
                <AppNameLogo height='65px' />
              </div>
              <div className='auth__formControls'>
                <input
                  className='auth__formInput'
                  type='text'
                  name='email'
                  placeholder='Phone number, username or email'
                  onChange={onInputChangeHandler}
                />
                <input
                  className='auth__formInput'
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={onInputChangeHandler}
                />
                <button type='submit'>Log in</button>
                <Link to='/forgot-password'>Forgot password?</Link>
              </div>
            </form>
          </div>
        </div>
        {/* Option to Sign Up */}
        <AuthOption
          prompt="Don't have an account?"
          path='/sign-up'
          text='Sign Up'
        />
      </div>
    </div>
  );
};

export default SignIn;
