import React from "react";
import "./css/AppNameLogo.css";

const AppNameLogo = ({ height, image }) => {
  return (
    <img
      style={{ height: height }}
      className='app__name'
      src={
        image !== undefined
          ? image
          : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
      }
      alt='Instagram Clone'
    />
  );
};

export default AppNameLogo;
