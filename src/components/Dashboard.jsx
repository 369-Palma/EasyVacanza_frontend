import "../styles/dashboard.css";
import BookingForm from "./BookingForm";
import MyNav from "./MyNav";
import { Container, Row, Col } from "react-bootstrap";
import { scrollToTop } from "../functions/functions";

const Dashboard = ({ selectedVacanza, token }) => {
  scrollToTop();

  return (
    <>
      <MyNav />
      <section className="coverPrivate">
        <div id="overlayPrivate"></div>
      </section>
      <Container className="contenitoreP bg-light">
        <Row>
          <Col>
            <BookingForm selectedVacanza={selectedVacanza} token={token} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
