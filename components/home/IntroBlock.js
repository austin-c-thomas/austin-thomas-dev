import { Button } from "@material-ui/core"
import { KeyboardArrowDown } from "@material-ui/icons"
import IntroGraphic from "./IntroGraphic"
import { Link } from 'react-scroll';

const IntroBlock = () => {
  return (
    <>
      <section id="intro-block">

        <IntroGraphic />

        <div className="intro-content">
          <h1>AUSTIN THOMAS</h1>
          <h2>FULL STACK WEB DEVELOPER FOR HIRE</h2>
        </div>

        <div className="carrot">
          <Link className="carrot-link" to="projects" spy={true} smooth={true} fullWidth>
            <Button color="primary" fullWidth><KeyboardArrowDown /></Button>
          </Link>
        </div>
      </section>


      <style jsx>
        {`      
          #intro-block {
            background: #000;
            color: white;
            padding: 80px 20px 0 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            min-height: 100vh;
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

          .carrot {
            grid-column: 1 / 3;
            display: flex;
            width: 100%;
            height: 50px;
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