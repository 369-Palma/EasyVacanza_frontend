import axios from "axios";
import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SingleCard from "./SingleCard";

const GalleriaOfferte = () => {
  const urlAll = "api/vacanze/pageable?page=0&size=5";

  const [data, setData] = useState({});
  /* 
  axios.get(urlAll).then((response) => {
    setData(response.data);
    console.log(response.data);
    console.log(data);
  }); */

  /*  useEffect(() => {
    axios({
      method: "GET",
      url: urlAll,
      data: data,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJmb3h5QGhvdG1haWwuaXQiLCJpYXQiOjE2ODQyNDI1NjQsImV4cCI6MTY5MjEzMTk2NH0.uUad1jkjoda4jJKEZNaAf4x8LJb1VdYF-MarnsFyKzLel9FqtTKDCLoShPoVfFOd",
      },
    }).then((response) => {
      setData(data.data);
    });
  }); */

  return (
    <Container classname="mt-3" id="boxOfferte">
      {data.map((vacanza) => (
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
