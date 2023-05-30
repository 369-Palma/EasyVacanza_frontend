import CustomNavbar from "./CustomNavbar";
import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const SpecialRequest = () => {
  const inviaEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `service_uf2isy6`,
        `template_j8faovd`,
        e.target,
        `3cG7_5IGDFHm5po4E`
      )
      .then(
        (result) => {
          toast.success("Email inviata con successo");
          console.log(result.text);
        },
        (error) => {
          toast.error("Invio Email non riuscito");
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <CustomNavbar className="mynavbar" claim="Scrivici!" />
      <Form onSubmit={inviaEmail}>
        <fieldset>
          <h2>Contattaci</h2>
          <Form.Label>Name</Form.Label>

          <Form.Control
            type="name"
            name="name"
            placeholder="Enter your name"
            required
          />

          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email"
            required
          />

          <Form.Label>Message</Form.Label>
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
            required
          ></textarea>

          <Form.Control type="submit" value="Invia" className="submit-btn" />
        </fieldset>
      </Form>
    </>
  );
};
export default SpecialRequest;
