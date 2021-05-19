const Copyright = () => {
  return (
    <>
      <div className="copyright">
        Copyright © Austin Thomas {new Date().getFullYear()}.
      </div>

      <style jsx>
        {`
          .copyright {
            color: #fff;
            font-weight: 200;
          }
        `}
      </style>
    </>
  );
};

export default Copyright;