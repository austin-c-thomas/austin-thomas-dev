import { TextField, Button, OutlinedInput, InputLabel, FormControl } from "@material-ui/core"
import { Label } from "@material-ui/icons";
import { useState } from "react";

const defaultData = {
  name: '',
  email: '',
  message: '',
}

const ContactForm = () => {
  const [ values, setValues ] = useState(defaultData);

  const handleInputChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="form-wrapper">
        <h1>Send me a message</h1>
        <form 
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
          type="submit">Send</Button>

        </form>
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