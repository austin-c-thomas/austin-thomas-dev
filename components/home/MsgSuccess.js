const MsgSuccess = () => {
  return (
    <>
      <div className="success-container">
        <h2>Message Received!</h2>
        <p>Thanks for reaching out. I'll get back to you soon!</p>
      </div>

      <style jsx>
        {`
          .success-container h2 {
            font-weight: 300;
            font-size: 2rem;
            color: yellow;
          }

          .success-container p {
            color: rgb(160, 160, 160);
          }
        `}
      </style>
    </>
  );
};

export default MsgSuccess;