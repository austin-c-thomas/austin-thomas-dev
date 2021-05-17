import { useEffect, useState } from 'react';
import { changeActiveLink } from '../../utils';

import LogoButton from './LogoButton';
import MenuButton from './MenuButton';
import NavList from './NavList';

const Header = ({ activeLinkIs, setActiveLinkIs }) => {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  // const [ clientWidth, setClientWidth ] = useState(0);

  useEffect(() => {
    // Update the current active Link by reading it from the URL
    changeActiveLink(window.location.href, setActiveLinkIs);
    // setClientWidth(window.innerWidth);
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
    <header id="header">
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
            height: 60px;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #000;
          }
        `}
      </style>
    </header>
  );
};

export default Header;