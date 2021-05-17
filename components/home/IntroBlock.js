import IntroGraphic from "./IntroGraphic"

const IntroBlock = () => {
  return (
    <>
      <section className="intro-block">

        <IntroGraphic />

        <div className="intro-content">
          <h1>Austin Thomas</h1>
          <h2>Full stack web developer for hire</h2>
        </div>
      </section>

      <style jsx>
        {`      
          .intro-block {
            background: #000;
            color: white;
            padding: 20px;
            width: 100vw;
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .intro-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            -webkit-animation: fadeIn 1s;
            -moz-animation: fadeIn 1s;
            -o-animation: fadeIn 1s;
            animation: fadeIn 1s;
          }


          h1 {
            font-size: 3rem;
          }

          @keyframes fadeIn {
            0% { opacity: 0%; }
            75% { opacity: 0%; }
            100% { opacity: 100%; }
          }

          @media screen and (max-width: 1080px) {
            .intro-block {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  );
};

export default IntroBlock;