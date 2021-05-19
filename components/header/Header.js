import { useEffect, useState } from 'react';
import { changeActiveLink } from '../../utils';

import LogoButton from './LogoButton';
import MenuButton from './MenuButton';
import NavList from './NavList';

const Header = ({ activeLinkIs, setActiveLinkIs }) => {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  useEffect(() => {
    // Update the current active Link by reading it from the URL
    changeActiveLink(window.location.href, setActiveLinkIs);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMenuOpen) {
      toggleMenu();
    };
  };

  return (
    <header id="header" 
    className="scrolled">
      <LogoButton 
        setActiveLinkIs = {setActiveLinkIs}/>

      <NavList
        activeLinkIs = {activeLinkIs}
        isMenuOpen = {isMenuOpen}
        handleLinkClick = {handleLinkClick}/>

      <MenuButton
        toggleMenu = {toggleMenu}
        isMenuOpen = {isMenuOpen} />
     
      <style jsx>
        {`
          #header {
            width: 100%;
            height: 60px;
            position: fixed;
            top: 0;
            left: 0;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #000;
            transition: all 0.7s ease-in;
          }
        `}
      </style>
    </header>
  );
};

export default Header;