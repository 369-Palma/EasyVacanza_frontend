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
      /* fixed="top" */
      className="navbar m-0 h-auto"
    >
      <Container className="d-flex justify-content-between w-100 mx-1.5">
        <Link to="/" className="navbar-brand">
          <strong> EasyVacanza</strong>
        </Link>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="d-flex align-items-end"
        >
          <Nav className="navLinks ms-auto flex-row " id="navLinks">
            <Link
              className={`nav-link ${
                location.pathname === "/dashboard" ? "active" : ""
              }`}
              to="/dashboard"
            >
              Dashboard
            </Link>

            <Link
              className={`nav-link ${
                location.pathname === "/prenota" ? "active" : ""
              }`}
              to="/prenota"
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
                location.pathname === "/" ? "active" : ""
              }`}
              to="/"
            >
              Logout
            </Link>
            <span className="ps-0 small welcomeUser"> Welcome user!</span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
