import { useEffect, useState } from 'react';
import { changeActiveLink } from '../../utils';

import LogoButton from './LogoButton';
import MenuButton from './MenuButton';
import NavList from './NavList';

const Header = ({ position, setPosition }) => {

  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

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
        setPosition = {setPosition}/>

      <NavList
        setIsMenuOpen = {setIsMenuOpen}
        isMenuOpen = {isMenuOpen}
        handleLinkClick = {handleLinkClick}
        position = {position}/>

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
            z-index: 100;
          }
        `}
      </style>
    </header>
  );
};

export default Header;