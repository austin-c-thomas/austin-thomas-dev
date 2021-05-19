import { MailOutline, PinDropOutlined, PublicOutlined } from "@material-ui/icons"
import ContactForm from "./ContactForm"

const ContactBlock = () => {
  return (
    <>
      <section id="contact-block">
        <div className="block-header">
          <h1>CONTACT</h1>
        </div>

        <div className="contact-body">
          <div className="contact-form-container">
            <ContactForm />
          </div>

          <div className="contact-methods-container">
            <div className="contact-method location">
              <PinDropOutlined />
              <p>Carlsbad, CA</p>
            </div>

            <div className="contact-method web">
              <PublicOutlined />
              <a 
                className="contact-link" 
                href="https://www.linkedin.com/in/austin-c-thomas/" 
                target="_blank">LinkedIn</a>
              <a 
                className="contact-link" 
                href="https://github.com/austin-c-thomas" 
                target="_blank">GitHub</a>
            </div>

            <div className="contact-method mail">
              <MailOutline />
              <a 
                className="contact-link" 
                href="mailto:austinthomas.dev@gmail.com" 
                target="_blank">Austinthomas.dev@gmail.com</a>
            </div>
          </div>
        </div>
        
      </section>

      <style jsx>
        {`
          #contact-block {
            background-color: #000;
            color: #fff;
            padding: 80px 10vw 5vw 10vw;
          }

          .contact-body {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .block-header {
            border-bottom: 1px solid #fff;
            padding-bottom: 10px;
            margin-bottom: 30px;
          }

          .contact-form-container {
            margin-bottom: 50px;
          }

          .contact-methods-container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .contact-method {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 30px;
            width: 100%;
          }

          .contact-link {
            font-size: 1.6rem;
            font-weight: 200;
            width: fit-content;
          }

          .contact-link:hover {
            color: rgb(100, 100, 100);
          }

          .contact-link, .contact-method p {
            color: rgb(160, 160, 160);
          }
          
          @media screen and (max-width: 960px) {
            .contact-body {
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

export default ContactBlock;