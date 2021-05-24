import { Link } from 'react-scroll';
import { Button } from '@material-ui/core'
import { KeyboardArrowLeft } from '@material-ui/icons';

const NavList = ({ 
  setIsMenuOpen, 
  isMenuOpen, 
  handleLinkClick,
  position }) => {
  
  return (
    <nav className={isMenuOpen ? "nav nav-active" : "nav nav-hidden"}>

      <div className="nav-header">
        <img className="logo" src="/assets/austin-logo.png" alt="Austin Thomas Web Development" />
        <div 
          className="close"
          onClick={() => setIsMenuOpen(false)}><KeyboardArrowLeft /></div>
      </div>
            
      <ul className={isMenuOpen ? "nav-list-active" : "nav-list-hidden"}>

        <li className={isMenuOpen ? "nav-link" : "hidden"}>
          <Link 
            to="intro-block" 
            spy={true} 
            smooth={true} 
            onClick={() => handleLinkClick("Home")}>
            <span className={position === 'Home' ? "active link" : "link"}>Home</span>
          </Link>
        </li>

        <li className={isMenuOpen ? "nav-link" : "hidden"}>
          <Link 
              to="bio-block" 
              spy={true} 
              smooth={true} 
              onClick={() => handleLinkClick("Home")}>
              <span className={position === 'Bio' ? "active link" : "link"}>Me</span>
            </Link>
          </li>

        <li className={isMenuOpen ? "nav-link" : "hidden"}>
          <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            onClick={() => handleLinkClick("Projects")}>
            <span className={position === 'Projects' ? "active link" : "link"}>Projects</span>
          </Link>
        </li>

        <li className={isMenuOpen ? "nav-link" : "hidden"}>
          <Link 
            to="tech-block" 
            spy={true} 
            smooth={true} 
            onClick={() => handleLinkClick("Technologies")}>
            <span className={position === 'Tech' ? "active link" : "link"}>Technologies</span>
          </Link>
        </li>
        
        <li className={isMenuOpen ? "nav-link" : "hidden"}>
          <Link 
            to="contact-block" 
            spy={true} 
            smooth={true} 
            onClick={() => handleLinkClick("Contact")}>
            <span className={position === 'Contact' ? "active link" : "link"}>Contact</span>
          </Link>
        </li>

      </ul>

      <style jsx>
        {`
          .nav {
            position: absolute;
            display: flex;
            flex-direction: column;
            top: 0;
            background-color: #000;
            padding-top: 60px;
            overflow-x: hidden;
            height: 100vh;
          }

          .nav-hidden {
            left: -1px;
            width: 0vw;
            animation: navRevert 0.4s;
          }

          .nav-active {
            left: 0;
            z-index: 100;
            width: 50vw;
            animation: navSlide 0.4s;
          }

          .nav-header {
            display: flex;
            justify-content: space-between;
            padding: 0 30px 0 30px;
          }

          .close {
            color: rgb(100, 100, 100);
            cursor: pointer;
          }

          .close:hover {
            color: rgb(60, 60, 60);
          }

          .logo {
            position: relative;
            width: 150px;
            -webkit-animation: linkSlide 0.5s ease 0s;
            -moz-animation: linkSlide 0.5s ease 0s;
            -o-animation: linkSlide 0.5s ease 0s;
            animation: linkSlide 0.5s ease 0s; 
          }

          .nav-list-active {
            height: 100%;
            list-style-type: none;
          }

          .nav-link {
            position: relative;
            -webkit-animation: linkSlide 0.5s ease 0s;
            -moz-animation: linkSlide 0.5s ease 0s;
            -o-animation: linkSlide 0.5s ease 0s;
            animation: linkSlide 0.5s ease 0s; 

            height: 80px; 
            display: flex;
            flex-direction: column;
            justify-content: center; 
          }

          .hidden {
            display: none;
          }

          .link {
            color: white;
            text-decoration: none;
            font-size: 1.4rem;
            margin-left: 30px;
            cursor: pointer;
          }

          .link.active {
            color: yellow;
          }

          .link:hover {
            color: yellow;
          }

          @keyframes navSlide {
            0% { width: 0px; }
            100 { width: 50vw; }
          }

          @keyframes navRevert {
            0% { width: 50vw; }
            100 { width: 0px; }
          }

          @keyframes linkSlide {
            0% { left: -200px; }
            100% { left: 0; }
          }

          @media screen and (max-width: 768px) {
            .nav-active {
              width: 80vw;
            }

            .close {
              display: none;
            }

            .logo {
              width: 150px;
            }
          }
        `}
      </style>
    </nav>
  );
};

export default NavList;