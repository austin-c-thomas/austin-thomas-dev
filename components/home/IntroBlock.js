import { Button } from "@material-ui/core"
import { KeyboardArrowDown } from "@material-ui/icons"
import IntroGraphic from "./IntroGraphic"
import { Link } from 'react-scroll';
import Carrot from "./Carrot";

const IntroBlock = () => {
  return (
    <>
      <section id="intro-block">
        <div className="intro-graphic-wrapper">
          <IntroGraphic />
        </div>

        <div className="intro-content">
          <h1>AUSTIN THOMAS</h1>
          <h2>FULL STACK WEB DEVELOPER FOR HIRE</h2>
        </div>

        <div className="carrot-wrapper">
          <Link className="carrot-link" to="bio-block" spy={true} smooth={true}>
            <Carrot color = "rgb(160, 160, 160)" />
          </Link>
        </div>
      </section>


      <style jsx>
        {`      
          #intro-block {
            background: #000;
            color: white;
            padding-top: 80px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            min-height: 100vh;
          }

          .intro-graphic-wrapper, .intro-content {
            padding: 20px;
          }

          .intro-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            -webkit-animation: fadeIn 0.5s;
            -moz-animation: fadeIn 0.5s;
            -o-animation: fadeIn 0.5s;
            animation: fadeIn 0.5s;
          }

          .carrot-wrapper {
            grid-column: 1 / 3;
            display: flex;
            justify-content: center;
            height: 50px;
            width: 100%;
            padding: 10px;
          }

          h1 {
            font-size: 3rem;
          }

          h2 {
            font-weight: 200;
          }

          @keyframes fadeIn {
            0% { opacity: 0%; }
            75% { opacity: 0%; }
            100% { opacity: 100%; }
          }

          @media screen and (max-width: 1080px) {
            #intro-block {
              grid-template-columns: 1fr;
              display: flex;
              flex-direction: column;
            }

            .intro-content {
              align-items: flex-start;
            }
          }
        `}
      </style>
    </>
  );
};

export default IntroBlock;