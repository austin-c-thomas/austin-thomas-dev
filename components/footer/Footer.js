import Copyright from './Copyright';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <Copyright />
      </footer>

      <style jsx>
        {`
          #footer {
            height: 80px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #000;
          }
        `}
      </style>
    </>
  );
};

export default Footer; 