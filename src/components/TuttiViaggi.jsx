import { Col } from "react-bootstrap";
import SingleCard from "./SingleCard";

const TuttiViaggi = (vacanze) => {
  <Col xs={6} md={4} lg={3} key={vacanze.id}></Col>;
  return vacanze.map((vacanza) => <SingleCard {...vacanza} />);
};

export default TuttiViaggi;
