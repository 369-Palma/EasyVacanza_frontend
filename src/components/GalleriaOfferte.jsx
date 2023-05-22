import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SingleCard from "./SingleCard";

const GalleriaOfferte = () => {
  const urlAll = "/vacanze/pageable?page=1&size=5";

  const [data, setData] = useState({});

  /*  axios.get(urlAll).then((response) => {
    setData(response.data);
    console.log(response.data);
    console.log(data);
  }); */

  return (
    <Container classname="mt-3" id="boxOfferte">
      {data?.map((vacanza) => (
        <Row classaName="justify-content-center" key={vacanza.id}>
          <Col xs={6} md={4} key={data.id}>
            <SingleCard data={data} />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default GalleriaOfferte;
