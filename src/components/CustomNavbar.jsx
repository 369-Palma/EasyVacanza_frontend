import "../styles/customNavbar.css";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  NavDropdown,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = ({ claim }) => {
  const location = useLocation();

  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          id="customNav"
          expand={expand}
          className="mb-3 p-0"
          fixed="top"
        >
          <Container fluid className="m-3">
            <Link to="/" className="navbar-brand">
              <strong> EasyVacanza</strong>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offcanvasBox p-0"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-0">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/offerte" ? "active" : ""
                    }`}
                    to="/offerte"
                  >
                    Offerte
                  </Link>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/prenotazione" ? "active" : ""
                    }`}
                    to="/prenotazione"
                  >
                    Prenota
                  </Link>

                  <Link
                    className={`nav-link ${
                      location.pathname === "/contatti" ? "active" : ""
                    }`}
                    to="/contatti"
                  >
                    Contatti
                  </Link>
                  <NavDropdown
                    title="Filtra per"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="OffcanvasFiltri"
                  >
                    <NavDropdown.Item href="#action3">
                      <Link
                        className={`nav-link ${
                          location.pathname === "/preferenze" ? "active" : ""
                        }`}
                        to="/preferenze"
                      >
                        {" "}
                        Preferenze{" "}
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Tipologia evento
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link
                    className={`nav-link ${
                      location.pathname === "/login" ? "active" : ""
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default CustomNavbar;
