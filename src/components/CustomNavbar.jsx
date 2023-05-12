import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";

const CustomNavbar = ({ claim }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="info" variant="light" fixed="top">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <strong> EasyVacanza</strong> - {claim}{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex align-items-end"
        >
          <Nav className="ms-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#offerte">Offerte</Nav.Link>
            <Nav.Link href="#eventi">Eventi</Nav.Link>
            <Nav.Link href="#offerte">Prenotazioni</Nav.Link>
            <NavDropdown title="Filtra per" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Tipologia alloggio
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tipologia vacanza
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Preferenze</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Cerca</Button>
                </Form>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
