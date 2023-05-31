import "../styles/customNavbar.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = ({ claim }) => {
  const location = useLocation();

  return (
    <Navbar
      id="customNav"
      collapseOnSelect
      expand="lg"
      bg="info"
      variant="light"
      fixed="top"
      className="m-0 h-auto"
    >
      <Container className="d-flex justify-content-between w-100 mx-1.5">
        <Link to="/" className="navbar-brand">
          <strong> EasyVacanza</strong> - {claim}
        </Link>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex align-items-end"
        >
          <Nav className="navLinks ms-auto flex-row " id="navLinks">
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

            <Link
              className={`nav-link ${
                location.pathname === "/login" ? "active" : ""
              }`}
              to="/login"
            >
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
