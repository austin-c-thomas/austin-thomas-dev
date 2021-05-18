import IntroGraphic from "./IntroGraphic"

const IntroBlock = () => {
  return (
    <>
      <section className="intro-block">

        <IntroGraphic />

        <div className="intro-content">
          <h1>AUSTIN THOMAS</h1>
          <h2>FULL STACK WEB DEVELOPER FOR HIRE</h2>
          <p></p>
        </div>
      </section>

      <style jsx>
        {`      
          .intro-block {
            background: #000;
            color: white;
            padding: 20px;
            display: grid;
            grid-template-columns: 1fr 1fr;
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
            .intro-block {
              grid-template-columns: 1fr;
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