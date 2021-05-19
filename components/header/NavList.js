import { Link } from 'react-scroll';

const NavList = ({ 
  activeLinkIs, 
  isMenuOpen, 
  handleLinkClick }) => {

  return (
    <nav className={isMenuOpen ? "nav nav-active" : "nav nav-hidden"}>
      
      <img className="logo" src="/assets/austin-logo.png" alt="Austin Thomas Web Development" />
      
      <ul className={isMenuOpen ? "nav-list-active" : "nav-list-hidden"}>

        <li className={isMenuOpen ? "nav-link" : "hidden"}>
          <Link 
            to="intro-block" 
            spy={true} 
            smooth={true} 
            onClick={() => handleLinkClick("Home")}>
            <span className="link">Home</span>
          </Link>
        </li>

        <li className={isMenuOpen ? "nav-link" : "hidden"}>
          <Link 
            to="projects" 
            spy={true} 
            smooth={true} 
            onClick={() => handleLinkClick("Home")}>
            <span className="link">Projects</span>
          </Link>
        </li>

        <li className={isMenuOpen ? "nav-link" : "hidden"}>
          <Link 
            to="tech-block" 
            spy={true} 
            smooth={true} 
            onClick={() => handleLinkClick("Home")}>
            <span className="link">Technologies</span>
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

          .logo {
            position: relative;
            width: 150px;
            margin-left: 30px;
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
          }
        `}
      </style>
    </nav>
  );
};

export default NavList;