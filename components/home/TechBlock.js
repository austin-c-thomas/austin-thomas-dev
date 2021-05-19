import StackSection from './StackSection';

const TechBlock = () => {
  return (
    <>
      <section id="tech-block">
        <div className="block-header">
          <h1>TECH STACK</h1>
        </div>

        <div className="stack-section-wrapper">
          <StackSection label = "Languages"/>
          <StackSection label = "Libraries/Frameworks"/>
          <StackSection label = "Build/Test Tools"/>
          <StackSection label = "Design Tools"/>
        </div>
      </section>

      <style jsx>
        {`
          #tech-block {
            background-color: #000;
            color: #fff;
            padding: 120px 10vw 5vw 10vw;
          }

          .block-header {
            border-bottom: 1px solid #fff;
            padding-bottom: 10px;
            margin-bottom: 30px;
          }

          .stack-section-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
          }

          @media screen and (max-width: 960px) {
            .stack-section-wrapper {
              display: flex;
              flex-direction: column;
            }
          }

          @media screen and (max-width: 768px) {
            #tech-block {
              padding: 100px 10vw 5vw 10vw;
            }  
          }
        `}
      </style>
    </>
  );
};

export default TechBlock;