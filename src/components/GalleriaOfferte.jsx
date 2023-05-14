import { Row, Col, Container } from "react-bootstrap";
import SingleCard from "./SingleCard";

const GalleriaOfferte = (data) => {
  <Container>
    {
      <Row classaName="row">
        <Col xs={6} md={4} lg={3} key={data.id}>
          <SingleCard data={data} />
        </Col>
      </Row>
    }
  </Container>;
};

export default GalleriaOfferte;
