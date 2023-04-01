import React from "react";
import { Link } from "react-router-dom";
import "./css/NavigationLinkItem.css";

const NavigationLinkItem = ({ text, path }) => {
  return (
    <Link className='link' to={path}>
      <div className='link__text'>{text}</div>
    </Link>
  );
};

export default NavigationLinkItem;
