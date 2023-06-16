import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "../styles/customNavbar.css";
const MyNav = ({ claim }) => {
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
              <strong> EasyVacanza</strong> - Welcome!
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
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default MyNav;
