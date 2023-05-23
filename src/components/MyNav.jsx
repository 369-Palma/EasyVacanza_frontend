import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const MyNav = ({ claim }) => {
  const location = useLocation();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="info"
      variant="light"
      fixed="top"
      className="m-0 h-auto"
    >
      <Container className="d-flex justify-content-between w-100 mx-1.5">
        <Link to="/" className="navbar-brand">
          <strong> EasyVacanza</strong>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex align-items-end"
        >
          <Nav className="navLinks ms-auto flex-row " id="navLinks">
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
                location.pathname === "/offerte" ? "active" : ""
              }`}
              to="/offerte"
            >
              Offerte
            </Link>

            <Link
              className={`nav-link ${
                location.pathname === "/recensioni" ? "active" : ""
              }`}
              to="/recensioni"
            >
              Recensioni
            </Link>

            <Link
              className={`nav-link ${
                location.pathname === "/login" ? "active" : ""
              }`}
              to="/login"
            >
              Logout
            </Link>
            <NavDropdown title="Filtra per" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Tipologia alloggio
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Tipologia vacanza
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Preferenze</NavDropdown.Item>
            </NavDropdown>
            <span> Welcome user!</span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
