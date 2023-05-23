import { Container } from "react-bootstrap";
import TuttiViaggi from "./TuttiViaggi";
import SearchTab from "./SearchTab";

const HomePage = () => {
  return (
    <>
      <SearchTab className="searchTab" />
      <Container className="boxContainer mx-auto">
        <TuttiViaggi />
      </Container>
    </>
  );
};

export default HomePage;
