import { useState } from "react";
import { Link } from "react-scroll";
import Carrot from "./Carrot";

const BioBlock = () => {
  const [ hovered, setHovered ] = useState(false);
  return (
    <>
      <section id="bio-block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered(true)}>



        <div className="bio-body-container">

          <div className="block-header">
            <h1>WELCOME</h1>
          </div>

          <div className="bio">
            <div className="dynamic-text">I'm Austin, a full stack web developer located in Carlsbad, CA, and my talent is <div className={hovered ? "underlined active" : "underlined"}>building things.</div></div>
            <div className="dynamic-text">Throughout my professional life I've built relationships with clients, business plans, marketing campaigns,
            and online presences. Nowadays, I prefer to spend my time building <div className={hovered ? "underlined active" : "underlined"}>functional</div>, <div className={hovered ? "underlined active" : "underlined"}>aesthetic websites</div> and <div className={hovered ? "underlined active" : "underlined"}>applications</div> with code.</div>
            <div className="dynamic-text">I specialize in developing full stack JavaScript applications with <div className={hovered ? "underlined active" : "underlined"}>React/NextJS</div>, <div className={hovered ? "underlined active" : "underlined"}>ExpressJS</div>, and <div className={hovered ? "underlined active" : "underlined"}>PostgreSQL</div>, and I have a strange but real obsession with writing <div className={hovered ? "underlined active" : "underlined"}>clean CSS</div> focused on full-responsiveness. Outside of the editor, I'm a goal-oriented team player
            with an unquenchable thirst for self-improvement who genuinely enjoys going above and beyond.</div>
          </div>

          <div className="logo-container">
            <img className="logo" src="/assets/austin-logo.png" alt="Austin Thomas Web Development" />
          </div>
        </div>

        <div className="carrot-wrapper">
          <Link className="carrot-link" to="projects" spy={true} smooth={true}>
            <Carrot color = "rgb(160, 160, 160)" />
          </Link>
        </div>
      </section>

      <style jsx>
        {`
          #bio-block {
            background-color: #000;
            color: #fff;
            padding-top: 80px;
            min-height: 100vh;
          }

          .block-header {
            border-bottom: 1px solid #fff;
            padding-bottom: 10px;
            margin-bottom: 30px;
          }

          .bio-body-container {
            display: flex;
            flex-direction: column;
            padding: 0 10vw 0 10vw;
          }

          .dynamic-text {
            font-size: 1.6rem;
            font-weight: 200;
          }

          .dynamic-text, .bio p, .bio h2 {
            margin-bottom: 15px;
          }

          .underlined, .underlined.active {
            display: inline-block; 
            transform: translate3d(0, 0, 0);
            overflow: hidden;
            position: relative;
            top: 6px;
          }

          .underlined.active {
            color: #659fbf;
            -webkit-animation: colorChange 2s;
            -moz-animation: colorChange 2s;
            -o-animation: colorChange 2s;
            animation: colorChange 2s;
          }

          .underlined.active::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #659fbf;
            opacity: 1;
          }

          .underlined.active::after {
            -webkit-animation: underlineSlide 2s;
            -moz-animation: underlineSlide 2s;
            -o-animation: underlineSlide 2s;
            animation: underlineSlide 2s;
          }

          @keyframes underlineSlide {
            0% { opacity: 0; transform: translate3d(-100%, 0, 0); }
            100% { opacity: 1; transform: translate3d(0, 0, 0); }
          }

          @keyframes colorChange {
            0% { color: #fff; }
            100% { color: #659fbf; }
          }
          
          .logo-container {
            display: flex;
            justify-content: center;
            padding: 40px;
          }

          .carrot-wrapper {
            display: flex;
            justify-content: center;
            height: 50px;
            width: 100%;
            padding: 10px;
          }

          @media screen and (max-width: 960px) {
            .bio-body-container {
              display: flex;
              flex-direction: column;
            }
          }

          @media screen and (max-width: 768px) {
            #tech-block {
              padding: 80px 10vw 5vw 10vw;
            }  
          }
        `}
      </style>
    </>
  );
};

export default BioBlock;