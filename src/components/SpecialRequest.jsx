import CustomNavbar from "./CustomNavbar";
import { Form } from "react-bootstrap";

const SpecialRequest = () => {
  return (
    <>
      <CustomNavbar className="mynavbar" claim="Scrivici!" />
      <Form>
        <fieldset>
          <h2>Contact us</h2>
          <Form.Label>Name</Form.Label>

          <Form.Control
            type="name"
            id="name"
            placeholder="Enter your name"
            required
          />

          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />

          <Form.Label>Message</Form.Label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
            required
          ></textarea>

          <Form.Control type="submit" value="Send" className="submit-btn" />
        </fieldset>
      </Form>
    </>
  );
};
export default SpecialRequest;
