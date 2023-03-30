import React from "react";

const AuthOption = ({ prompt, text, path }) => {
  return (
    <div className='auth__pageOption padded__border'>
      <p>
        {prompt} <a href={path}>{text}</a>
      </p>
    </div>
  );
};

export default AuthOption;
