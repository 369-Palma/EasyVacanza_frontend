import { Container } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
import TuttiViaggi from "./TuttiViaggi";
import SearchTab from "./SearchTab";

const HomePage = () => {
  return (
    <>
      <CustomNavbar className="mynavbar" claim="Were dreams come true!" />
      <SearchTab className="searchTab" />
      <Container className="boxContainer mx-auto">
        <TuttiViaggi />
      </Container>
    </>
  );
};

export default HomePage;
