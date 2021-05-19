const ContactBlock = () => {
  return (
    <>
      <section id="contact-block">
        <div className="block-header">
          <h1>CONTACT</h1>
        </div>


      </section>

      <style jsx>
        {`
          #contact-block {
            background-color: #000;
            color: #fff;
            padding: 120px 10vw 5vw 10vw;
          }

          .block-header {
            border-bottom: 1px solid #fff;
            padding-bottom: 10px;
            margin-bottom: 30px;
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

export default ContactBlock;