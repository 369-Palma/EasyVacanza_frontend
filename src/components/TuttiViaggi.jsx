import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import SingleCard from "./SingleCard";
import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import axiosInstance from "../api/axios";

const TuttiViaggi = () => {
  const urlAll = "/vacanze/pageable?page=0&size=5";

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axiosInstance.get(urlAll);
        setData(resp.data.vacanza);
        console.log(resp.data);
      } catch (error) {
        console.error("Errore durante la richiesta: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <SearchBar className="searchTab" />
      <Container>
        {data?.map((vacanza) => (
          <Row className="justify-content-center" key={vacanza.id}>
            <Col xs={6} md={4}>
              <SingleCard data={vacanza} />
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default TuttiViaggi;
