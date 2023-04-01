import React from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/context/UserContext';
import AppNameLogo from "./AppNameLogo";
import NavigationLinkItem from "./NavigationItem";

const Header = ({ openModalHandler }) => {

  const { logout } = useAuth()
  const navigate =  useNavigate()

  return (
    <div className='header'>
      <AppNameLogo
        height='35px'
        image='https://www.pngkey.com/png/full/28-287308_instagram-logo-text-white.png'
      />
      <div className='header__links'>
        <NavigationLinkItem text='Home' path='/home' />
        <NavigationLinkItem text='Search' path='/search' />
        <NavigationLinkItem text='Explore' path='/explore' />
        <button className='header__btn' onClick={openModalHandler}>
          Create
        </button>
      </div>
      <input className='search__input' type='text' placeholder='Search' />
      <button onClick={() => {
        logout()
        navigate('/sign-in')
      }}>Logout</button>
    </div>
  );
};

export default Header;
