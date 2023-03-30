import React from "react";
import { Link } from "react-router-dom";

const AuthOption = ({ prompt, text, path }) => {
  return (
    <div className='auth__pageOption padded__border'>
      <p>
        {prompt} <Link to={path}>{text}</Link>
      </p>
    </div>
  );
};

export default AuthOption;
