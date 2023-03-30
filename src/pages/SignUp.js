import React from "react";
import AppNameLogo from "../component/AppNameLogo";
import AuthOption from "../component/AuthOption";
import "./css/Auth.styles.css";

const SignUp = () => {
  return (
    <div className='auth__page'>
      <div className='auth__pageFormContainer'>
        <div className='auth__pageForm padded__border'>
          {/* Form submission */}
          <div className='auth__form'>
            <form action=''>
              {/* Instagram logo */}
              <div className='auth__formLogoContainer'>
                <AppNameLogo height='65px' />
              </div>{" "}
              <div className='auth__formControls'>
                <input
                  className='auth__formInput'
                  type='text'
                  placeholder='Username'
                />
                <input
                  className='auth__formInput'
                  type='text'
                  placeholder='Email'
                />
                <input
                  className='auth__formInput'
                  type='password'
                  placeholder='Password'
                />
                <button>Sign up</button>
              </div>
            </form>
          </div>
        </div>
        {/* Option to Sign In */}
        <AuthOption prompt='Have an account?' path='/' text='Log In' />
      </div>
    </div>
  );
};

export default SignUp;
