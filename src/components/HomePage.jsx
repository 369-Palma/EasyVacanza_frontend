import { Container } from "react-bootstrap";
import GalleriaOfferte from "./GalleriaOfferte";
import SearchBar from "./SearchBar";

const HomePage = () => {
  return (
    <>
      <SearchBar className="searchTab" />
      <Container className="boxContainer">
        <h2> Lasciati ispirare dalle nostre offerte speciali!</h2>
        <GalleriaOfferte />
      </Container>
    </>
  );
};

export default HomePage;
