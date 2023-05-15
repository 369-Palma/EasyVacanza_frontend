import { Container, Row, Col } from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

const RegistrationPage = () => {
  return (
    <Container className="flex-column my-5">
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
