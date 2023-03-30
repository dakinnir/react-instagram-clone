import React from "react";
import AppNameLogo from "../component/AppNameLogo";
import AuthOption from "../component/AuthOption";

const SignIn = () => {
  return (
    <div className='auth__page'>
      {/* images display */}
      <img
        className='auth__pageImage'
        src='https://www.instagram.com//images/instagram/xig/homepage/screenshots/screenshot1-2x.png?__d=www'
        alt=''
      />
      <div className='auth__pageFormContainer'>
        <div className='auth__pageForm padded__border'>
          {/* Form submission */}
          <div className='auth__form'>
            <form action=''>
              {/* Instagram logo */}
              <AppNameLogo />
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
                <button>Log in</button>
                <a href='#forgot'>Forgot password?</a>
              </div>
            </form>
          </div>
        </div>
        {/* Option to Sign Up */}
        <AuthOption prompt="Don't have an account?" path='#d' text='Sign Up' />
      </div>
    </div>
  );
};

export default SignIn;
