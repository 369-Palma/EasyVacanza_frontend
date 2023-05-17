import { Container } from "react-bootstrap";
import GalleriaOfferte from "./GalleriaOfferte";
import SearchBar from "./SearchBar";
import Register from "./Register";

const HomePage = () => {
  return (
    <>
      <SearchBar className="searchTab" />
      <Container className="boxContainer mx-auto">
        <h2> Lasciati ispirare dalle nostre offerte speciali!</h2>
        {/* <GalleriaOfferte /> */}
      </Container>
    </>
  );
};

export default HomePage;
