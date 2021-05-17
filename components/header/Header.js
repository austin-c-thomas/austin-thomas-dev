import { useEffect, useState } from 'react';
import { changeActiveLink } from '../../utils';

import LogoButton from './LogoButton';
import NavList from './NavList';

const Header = ({ activeLinkIs, setActiveLinkIs }) => {

  const [ isBurgerMenuOpen, setIsBurgerMenuOpen ] = useState(false);
  // const [ clientWidth, setClientWidth ] = useState(0);

  useEffect(() => {
    // Update the current active Link by reading it from the URL
    changeActiveLink(window.location.href, setActiveLinkIs);
    // setClientWidth(window.innerWidth);
  });

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const handleLinkClick = () => {
    if (isBurgerMenuOpen) {
      toggleBurgerMenu();
    };
  };

  return (
    <header id="header">
      <LogoButton 
        setActiveLinkIs = {setActiveLinkIs}/>

      {/* <NavList
        activeLinkIs = {activeLinkIs}
        isBurgerMenuOpen = {isBurgerMenuOpen}
        handleLinkClick = {handleLinkClick}/> */}
     
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