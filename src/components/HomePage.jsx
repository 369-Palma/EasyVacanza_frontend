import { Container } from "react-bootstrap";
import GalleriaOfferte from "./GalleriaOfferte";

const HomePage = () => {
  return (
    <Container>
      <h1> Lasciati ispirare dalle nostre offerte speciali!</h1>
      <GalleriaOfferte />
    </Container>
  );
};

export default HomePage;
