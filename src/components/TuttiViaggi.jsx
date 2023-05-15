import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import SingleCard from "./SingleCard";
import React, { useState } from "react";
import SearchBar from "./SearchBar";

const TuttiViaggi = (vacanze) => {
  const urlAll = "http://localhost:8086/api/vacanze/pageable?page=0&size=5";

  const [data, setData] = useState([]);

  axios.get(urlAll).then((response) => {
    setData(response.data);
    console.log(response.data);
    console.log(data);
  });

  return (
    <>
      <SearchBar className="searchTab" />
      <Container>
        {data.map((vacanza) => (
          <Row classaName="justify-content-center" key={vacanza.id}>
            <Col xs={6} md={4} key={data.id}>
              <SingleCard data={data} />
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default TuttiViaggi;
