import Link from 'next/link';

const NavList = ({ 
  activeLinkIs, 
  isMenuOpen, 
  handleLinkClick }) => {

  return (
    <nav className={isMenuOpen ? "nav nav-active" : "nav nav-hidden"}>
      <ul className={isMenuOpen ? "nav-list-active" : "nav-list-hidden"}>

        <li className={isMenuOpen ? "nav-link" : "hidden"}>
          <Link href="/">
            <a onClick={() => handleLinkClick("Home")}>Home</a>
          </Link>
        </li>

        <li className={isMenuOpen ? "nav-link" : "hidden"}>
          <Link href="/about">
            <a onClick={() => handleLinkClick("About")}>About</a>
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

            height: 500px;
          }

          .nav-hidden {
            left: -1px;
            z-index: -1;
            width: 0vw;
            animation: navRevert 0.4s;
          }

          .nav-active {
            left: 0;
            z-index: 100;
            width: 80vw;
            animation: navSlide 0.4s;
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

            height: 60px; 
            display: flex;
            flex-direction: column;
            justify-content: center; 
          }

          .hidden {
            display: none;
          }

          .nav-link a {
            color: white;
            text-decoration: none;
            font-size: 1.4rem;
            margin-left: 10px;
          }

          .nav-link a:hover {
            color: yellow;
          }

          @keyframes navSlide {
            0% { width: 0px; }
            100 { width: 80vw; }
          }

          @keyframes navRevert {
            0% { width: 80vw; }
            100 { width: 0px; }
          }

          @keyframes linkSlide {
            0% { left: -200px; }
            100% { left: 0; }
          }

        `}
      </style>
    </nav>
  );
};

export default NavList;