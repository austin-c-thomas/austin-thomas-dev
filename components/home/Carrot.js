const Carrot = ({ color }) => {
  return (
    <>
      <div className="button-wrap">
        <div className="carrot">
          <span className="carrot-left"></span>
          <span className="carrot-right"></span>
        </div>
      </div>
      
      <style jsx>
        {`
          .button-wrap {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 92vw;
            cursor: pointer;
          }

          .carrot {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100px;

            -webkit-animation: throb 3s ease 0s infinite;
            -moz-animation: throb 3s ease 0s infinite;
            -o-animation: throb 3s ease 0s infinite;
            animation: throb 3s ease 0s infinite; 
          }

          .button-wrap:hover {
            background-color: rgba(255, 255, 255, 0.01);
          }

          .carrot-left, .carrot-right {
            background-color: ${color};
            width: 5px;
            height: 40px;
            position: relative;
          }

          .carrot-left {
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
            right: 10px;
          }

          .carrot-right {
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            transform: rotate(45deg);
            left: 10px;
          }

          @keyframes throb {
            0% { transform: scale(1); }
            50% { transform: scale(1.2); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </>
  );
};

export default Carrot;