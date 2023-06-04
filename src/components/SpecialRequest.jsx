import "../styles/registrationForm.css";
import CustomNavbar from "./CustomNavbar";
import { Form, Button, Col } from "react-bootstrap";
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
      <Col className="titolo mt-5 mx-auto">
        <h2 className="margineH2 text-center w-100"> Contattaci </h2>
      </Col>

      <Form
        onSubmit={inviaEmail}
        className="formBox p-5 mx-auto border rounded-2"
      >
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Nome:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
            placeholder="Inserisci il tuo nome"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
            placeholder="Inserisci la tua email"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Messaggio:</Form.Label>
          <Form.Control
            type="textarea"
            name="message"
            required
            placeholder="Scrivi qui il tuo messaggio"
            autoComplete="off"
            rows={5}
          />
        </Form.Group>
        <Button className="bottone mt-3" variant="primary" type="submit">
          INVIA
        </Button>
      </Form>
    </>
  );
};
export default SpecialRequest;
