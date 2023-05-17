import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const CustomFooter = (props) => {
  return (
    <Container className="border border-dark text-bg-dark fix-bottom mt-5 mx-0 px-0 w-100 border-none px-0">
      <Row id="footer" className="text-center mx-0 ">
        <Col className="col-6 offset-3">
          <Row>
            <Col className=" col-12 text-left mb-2">
              <i className="fa fa-facebook footer-icon"></i>
              <i className="fa fa-instagram footer-icon"></i>
              <i className="fa fa-twitter footer-icon"></i>
              <i className="fa fa-youtube footer-icon"></i>
            </Col>
          </Row>
          <Row>
            <Col>
              <Row>
                <Col className=" col-12 footer-links">
                  <p>
                    <Link to="#" alt="footer link">
                      Privacy
                    </Link>
                  </p>
                  <p>
                    <Link to="#" alt="footer link">
                      Contact us
                    </Link>
                  </p>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row className="justify-content-space-around">
                <Col className=" col-12 footer-links">
                  <p>
                    <Link to="#" alt="footer link">
                      Help Center
                    </Link>
                  </p>
                  <p>
                    <Link to="#" alt="footer link">
                      Jobs
                    </Link>
                  </p>
                  <p>
                    <Link to="#" alt="footer link">
                      Cookie Preferences
                    </Link>
                  </p>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col className=" col-12 footer-links">
                  <p>
                    <Link to="#" alt="footer link">
                      Gift Cards
                    </Link>
                  </p>
                  <p>
                    <Link to="#" alt="footer link">
                      Terms of Use
                    </Link>
                  </p>
                  <p>
                    <Link to="#" alt="footer link">
                      Corporate Information
                    </Link>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col className=" col-12 text-left mb-2 mt-2 copyright">
              <p>EasyVacanza &copy; {new Date().getFullYear()}</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomFooter;
