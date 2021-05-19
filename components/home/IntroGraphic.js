const IntroGraphic = () => {
  return (
    <>
      <div className="intro-graphic">
        <div className="letter a">
          <div className="a1"></div>
          <div className="a2">
            <div className="a2a"></div>
          </div>
          <div className="a3"></div>
        </div>

        <div className="letter t">
          <div className="t1"></div>
          <div className="t2"></div>
        </div>

        <div className="letter w">
          <div className="w1"></div>
          <div className="w2">
            <div className="w2a"></div>
          </div>
          <div className="w3"></div>
        </div>

        <div className="letter d">
          <div className="d1"></div>
        </div>
      </div>

      <style jsx>
        {`

          .intro-graphic {
            display: grid;
            grid-template-columns: 40vh 40vh;
            grid-template-rows: 40vh 40vh;
            grid-gap: 5px;
            background-color: #000;
          }

          .letter {
            height: 100%;
            width: 100%;
            display: flex;
            background-color: #fff;
          }

          .a, .t, .w, .d {
            -webkit-animation: fadeIn 0.5s;
            -moz-animation: fadeIn 0.5s;
            -o-animation: fadeIn 0.5s;
            animation: fadeIn 0.5s;
          }

          .a {
            border-top-right-radius: 20vh;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            background: url('/assets/lake-UL.jpg');
            background-size: cover;
          }

            .a1 {
              background-color: #000;
              width: 20vh;
              height: 10vh;
              border-top-right-radius: 10vh;
            }

            .a2 {
              width: 20vh;
              height: 10vh;
              display: grid;
              grid-template-columns: 1fr 2fr;
            }

            .a2a {
              grid-column: 1;
              background-color: #000;
              height: 10vh;
            }

            .a3 {
              background-color: #000;
              width: 20vh;
              height: 10vh;
            }

          .t {
            align-items: flex-end;
            justify-content: space-between;
            background: url('/assets/lake-UR.jpg');
            background-size: cover;
          }

            .t1, .t2 {
              background-color: #000;
              height: 30vh;
              width: 14vh;
            }

          .w {
            border-bottom-right-radius: 20vh;
            justify-content: space-around;
            display: grid;
            grid-template-columns: 10vh 1fr 1fr 1fr 10vh;
            background: url('/assets/lake-BL.jpg');
            background-size: cover;
          }

            .w1 {
              grid-column: 2;
              background-color: #000;
              height: 30vh;
              align-self: flex-start;
              border-bottom-right-radius: 10vh;
            }

            .w2 {
              grid-column: 2;
              background-color: #000;
              background-image: radial-gradient(circle at 10px 10px, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 10px, black 10px);
            }

            .w2a {
              background: url('/assets/lake-BL.jpg');
              background-position: bottom;
              height: 10vh;
              border-bottom-right-radius: 10vh;
            }

            .w3 {
              grid-column: 4;
              grid-row: 1;
              background-color: #000;
              height: 30vh;
              align-self: flex-start;
              border-bottom-right-radius: 10vh;
            }

          .d {
            border-top-right-radius: 20vh;
            border-bottom-right-radius: 20vh;

            justify-content: center;
            align-items: center;
            background: url('/assets/lake-BR.jpg');
          }

            .d1 {
              background-color: #000;
              width: 20vh;
              height: 20vh;
              border-top-right-radius: 10vh;
              border-bottom-right-radius: 10vh;
            }

          @keyframes fadeIn {
            0% { opacity: 0%; }
            100% { opacity: 100%; }
          }

          @media screen and (max-width: 1080px) {
            .intro-graphic {
              grid-template-columns: 32vh 32vh;
              grid-template-rows: 32vh 32vh;
            }
  
            .a {
              border-top-right-radius: 16vh;
            }
  
            .a1 {
              background-color: #000;
              width: 16vh;
              height: 8vh;
              border-top-right-radius: 8vh;
            }
  
            .a2 {
              width: 16vh;
              height: 8vh;
            }
  
            .a2a {
              height: 8vh;
            }
  
            .a3 {
              width: 16vh;
              height: 8vh;
            }
  
            .t1, .t2 {
              height: 24vh;
              width: 10.5vh;
            }
  
            .w {
              border-bottom-right-radius: 16vh;
              grid-template-columns: 8vh 1fr 1fr 1fr 8vh;
            }
  
            .w1 {
              height: 24vh;
              border-bottom-right-radius: 8vh;
            }
    
            .w2a {
              height: 8vh;
              border-bottom-right-radius: 8vh;
            }
  
            .w3 {
              height: 24vh;
              border-bottom-right-radius: 8vh;
            }
  
            .d {
              border-top-right-radius: 16vh;
              border-bottom-right-radius: 16vh;
            }
  
            .d1 {
              width: 16vh;
              height: 16vh;
              border-top-right-radius: 8vh;
              border-bottom-right-radius: 8vh;
            }  
          }

          @media screen and (max-width: 768px) {
            .intro-graphic {
              grid-template-columns: 40vw 40vw;
              grid-template-rows: 40vw 40vw;
            }
  
            .a {
              border-top-right-radius: 20vw;
            }
  
            .a1 {
              background-color: #000;
              width: 20vw;
              height: 10vw;
              border-top-right-radius: 10vw;
            }
  
            .a2 {
              width: 20vw;
              height: 10vw;
            }
  
            .a2a {
              height: 10vw;
            }
  
            .a3 {
              width: 20vw;
              height: 10vw;
            }
  
            .t1, .t2 {
              height: 30vw;
              width: 14vw;
            }
  
            .w {
              border-bottom-right-radius: 20vw;
              grid-template-columns: 10vw 1fr 1fr 1fr 10vw;
            }
  
            .w1 {
              height: 30vw;
              border-bottom-right-radius: 10vw;
            }
    
            .w2a {
              height: 10vw;
              border-bottom-right-radius: 10vw;
            }
  
            .w3 {
              height: 30vw;
              border-bottom-right-radius: 10vw;
            }
  
            .d {
              border-top-right-radius: 20vw;
              border-bottom-right-radius: 20vw;
            }
  
            .d1 {
              width: 20vw;
              height: 20vw;
              border-top-right-radius: 10vw;
              border-bottom-right-radius: 10vw;
            }  
          }
        `}
      </style>
    </>
  );
};

export default IntroGraphic;