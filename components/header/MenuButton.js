const MenuButton = ({ toggleMenu, isMenuOpen }) => {

    return (
      <div className="menu-button">

        <button 
          aria-label="Navigation"
          onClick={toggleMenu}>

          <h2 className={isMenuOpen ? "span-hidden" : ''}>M</h2>
          <div className="burger">
            <span className="burger-top" id={isMenuOpen ? "burger-top-active" : ''}></span>
            <span className="burger-mid" id={isMenuOpen ? "burger-mid-active" : ''}></span>
            <span className="burger-bottom" id={isMenuOpen ? "burger-bottom-active" : ''}></span>
          </div>
          <h2 className={isMenuOpen ? "span-hidden" : ''}>N</h2>
          <h2 className={isMenuOpen ? "span-hidden" : ''}>U</h2>

        </button>

        <style jsx>
          {`
            h2 {
              font-size: 1.8rem;
              font-weight: 200;
            }

            .menu-button button {
              background-color: rgba(0, 0, 0, 0);
              outline: none;
              border: none;
              color: white;
              display: flex;
              align-items: center;
              cursor: pointer;
            }

            .menu-button button:hover {
              color: rgb(200, 200, 200);
            }
            
            .burger {
              display: flex;
              height: 40px;
              width: 40xpx;

              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              padding: 5px 2px 5px 2px;
            }
            

            .burger-top {
              -webkit-animation: revertTopBar 0.3s;
              -moz-animation: revertTopBar 0.3s;
              -o-animation: revertTopBar 0.3s;
              animation: revertTopBar 0.3s;
              position: relative;
              height: 2px;
              width: 15px;
              border-radius: 10px;
              background-color: white;
            }

            .burger-bottom {
              -webkit-animation: revertBottomBar 0.3s;
              -moz-animation: revertBottomBar 0.3s;
              -o-animation: revertBottomBar 0.3s;
              animation: revertBottomBar 0.3s;
              position: relative;
              height: 2px;
              width: 15px;
              background-color: white;
            }

            .burger-mid {
              -webkit-animation: revertMiddleBar 0.3s;
              -moz-animation: revertMiddleBar 0.3s;
              -o-animation: revertMiddleBar 0.3s;
              animation: revertMiddleBar 0.3s;
              height: 2px;
              width: 15px;
              border-radius: 10px;
              background-color: white;
            }

            .span-hidden {
              display: none;
            }

            #burger-top-active {
              -webkit-animation: transformTopBar 0.3s;
              -moz-animation: transformTopBar 0.3s;
              -o-animation: transformTopBar 0.3s;
              animation: transformTopBar 0.3s;
      
              -webkit-transform: rotate(-45deg);
              -moz-transform: rotate(-45deg);
              -ms-transform: rotate(-45deg);
              -o-transform: rotate(-45deg);
              transform: rotate(-45deg);
              position: relative;
              top: 10px;
              height: 3px;
              width: 30px;
            }

            #burger-mid-active {
              -webkit-animation: transformMiddleBar 0.3s;
              -moz-animation: transformMiddleBar 0.3s;
              -o-animation: transformMiddleBar 0.3s;
              animation: transformMiddleBar 0.3s;

              -webkit-opacity: 0;
              -moz-opacity: 0;
              filter: alpha(opacity=0);
              opacity: 0%;
              height: 3px;
              width: 30px;
            }

            #burger-bottom-active {
              -webkit-animation: transformBottomBar 0.3s;
              -moz-animation: transformBottomBar 0.3s;
              -o-animation: transformBottomBar 0.3s;
              animation: transformBottomBar 0.3s;
      
              -webkit-transform: rotate(45deg);
              -moz-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              -o-transform: rotate(45deg);
              transform: rotate(45deg);
              position: relative;
              bottom: 10px;
              height: 3px;
              width: 30px;
            }

            @keyframes transformTopBar {
              0% { top: 0px; transform: none; }
              50% { top: 10px; transform: none; }
              100% { top: 10px; transform: rotate(-45deg) }
            }
  
            @keyframes transformBottomBar {
              0% { bottom: 0px; transform: none; }
              50% { bottom: 10px; transform: none; }
              100% { bottom: 10px; transform: rotate(45deg) }
            }
  
            @keyframes transformMiddleBar {
              0% { opacity: 100%; }
              50% { opacity: 0%; }
            }
            
            @keyframes revertTopBar {
              0% { top: 10px; transform: rotate(-45deg); }
              50% { top: 10px; transform: none; }
              100% { top: 0px; transform: none; }
            }
  
            @keyframes revertBottomBar {
              0% { bottom: 10px; transform: rotate(45deg); }
              50% { bottom: 10px; transform: none; }
              100% { bottom: 0px; transform: none; }
            }
  
            @keyframes revertMiddleBar {
              0% { opacity: 0%; }
              50% { opacity: 0%; }
              100% { opacity: 100%; }
            } 

          `}
        </style>


      </div>

    );
};

export default MenuButton;