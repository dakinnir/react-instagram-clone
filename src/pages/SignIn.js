import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AppNameLogo from "../component/AppNameLogo";
import AuthOption from "../component/AuthOption";
import "./css/Auth.styles.css";

const SignIn = () => {
  const navigate = useNavigate();

  const submitFormHandler = (event) => {
    event.preventDefault();
    navigate("/home");
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
            <form action='' onSubmit={submitFormHandler}>
              {/* Instagram logo */}
              <div className='auth__formLogoContainer'>
                <AppNameLogo height='65px' />
              </div>
              <div className='auth__formControls'>
                <input
                  className='auth__formInput'
                  type='text'
                  placeholder='Phone number, username or email'
                />
                <input
                  className='auth__formInput'
                  type='password'
                  placeholder='Password'
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
