import "../styles/dashboard.css";
import BookingForm from "./BookingForm";
import MyNav from "./MyNav";
import { Container, Row, Col } from "react-bootstrap";

const Dashboard = () => {
  return (
    <>
      <MyNav />
      <section className="coverPrivate">
        <div id="overlayPrivate"></div>
      </section>
      <Container className="contenitoreP bg-light">
        <Row>
          <Col>
            <BookingForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
