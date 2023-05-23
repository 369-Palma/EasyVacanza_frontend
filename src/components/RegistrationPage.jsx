import "../styles/registrationForm.css";
import { Container, Row, Col } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

const RegistrationPage = () => {
  return (
    <Container className="authForm flex-column" id="authenticationForm">
      <Row className="w-100">
        <Col className="border border-black">
          <Register />
        </Col>
        <Col className="border border-black">
          <Login />
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationPage;
