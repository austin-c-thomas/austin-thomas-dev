import { TextField, Button, OutlinedInput, InputLabel, FormControl } from "@material-ui/core"
import { Label } from "@material-ui/icons";
import { useState } from "react";
import emailjs from 'emailjs-com';
import MsgSuccess from './MsgSuccess';

const defaultData = {
  name: '',
  email: '',
  message: '',
}

const ContactForm = () => {
  const [ values, setValues ] = useState(defaultData);
  const [ sent, setSent ] = useState(false);

  const handleInputChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSent(true);

    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    try {
      const result = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID);
      if (result) {
        console.log(result.text);
      };
    } catch (error) {
      setSent(false);
      console.error(error.text);
    };
  };

  return (
    <>
      <div className="form-wrapper">
        <h1>Send me a message</h1>
        {sent ?
        <MsgSuccess />
        : <form 
        id="contact-form"
        onSubmit={handleSubmit}>

        <TextField 
          variant="outlined"
          id="name"
          label="Name"
          required={true}
          value={values.name}
          onChange={handleInputChange}/>

        <TextField 
          variant="outlined"
          id="email"
          label="Email"
          type="email"
          required={true}
          value={values.email}
          onChange={handleInputChange}/>  

        <TextField 
          variant="outlined"
          id="message"
          label="Message"
          multiline
          rows={6}
          required={true}
          value={values.message}
          onChange={handleInputChange}/>

        <Button
          variant="outlined"
          color="primary"
          type="submit"
          disabled={sent ? true : false}>Send</Button>
        </form>}
      </div>

      <style jsx>
        {`
          .form-wrapper h1 {
            margin-bottom: 20px;
          }

          #contact-form {
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 15px;
          }
        `}
      </style>
    </>
  );
};

export default ContactForm;