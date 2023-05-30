import { Row, Col, Container } from "react-bootstrap";
import SingleCard from "./SingleCard";
import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import CustomNavbar from "./CustomNavbar";

const TuttiViaggi = () => {
  const urlAll = "/vacanze/pageable?page=2&size=6";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get(urlAll);
        setData(resp.data.content);
        console.log(resp.data.content);
      } catch (error) {
        console.error("Errore durante la richiesta: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <CustomNavbar className="mynavbar" claim="Were dreams come true!" />
      <Container className="mt-5">
        <Row className="justify-content-center">
          <h2> Lasciati ispirare dalle nostre offerte speciali!</h2>
          {data?.map((content) => (
            <Col xs={6} md={4} key={content.id}>
              <SingleCard data={content} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TuttiViaggi;
