import axios from "axios";
import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  const url = `http://localhost:8086/api/attivita/partedescrizione/`;

  const searchKeyword = (event) => {
    if (event.key === "Enter") {
      axios.get(url + keyword).then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log(data);
      });
      setKeyword("");
    }
  };

  return (
    <>
      <Row className=" d-flex flex-column mx-auto align-content-center mt-3 text-bg-primary border border-secondary">
        <Col md={2} className="w-100 gradient-container mx-auto">
          <Form className=" my-5 ">
            <Form.Control
              id="searchTab"
              className="justify-content-center mx-auto text-center width-100 fs-6"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="Cerca"
              onKeyPress={(event) => searchKeyword(event)}
              type="text"
            />
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default SearchBar;
