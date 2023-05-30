import CustomNavbar from "./CustomNavbar";
import { Form } from "react-bootstrap";

const SpecialRequest = () => {
  return (
    <>
      <CustomNavbar className="mynavbar" claim="Scrivici!" />
      <Form>
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
