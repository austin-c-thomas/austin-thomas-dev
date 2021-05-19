import { Link } from 'react-scroll';

const LogoButton = () => {
  return (
    <div className='logo-button'>

        <Link 
            to="intro-block" 
            spy={true} 
            smooth={true} 
            // onClick={() => handleLinkClick("Home")}
            >
        <>
          <h1>AUSTIN THOMAS</h1>
          <div className='sub-head'>
            <span>W</span>
            <span>E</span>
            <span>B</span>
            <span> </span>
            <span>D</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>L</span>
            <span>O</span>
            <span>P</span>
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>
          </div>
        </>
      </Link>

      <style jsx>
        {`
          .logo-button {
            color: white;
          }

          h1 {
            font-size: 1.4rem;
          }

          .sub-head {
            display: flex;
            justify-content: space-between;
            font-weight: 200;
            font-size: 0.6rem;
          }
        `}
      </style>
    </div>


  );
};

export default LogoButton;