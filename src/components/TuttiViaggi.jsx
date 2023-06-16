import { Row, Col, Container } from "react-bootstrap";
import SingleCard from "./SingleCard";
import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import CustomNavbar from "./CustomNavbar";
import "../styles/home.css";
const TuttiViaggi = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await axios.get(`/vacanze`);

      let listaOfferte = resp.data;

      let listaShowOfferte = [];
      let numSelezionati = new Set();
      while (numSelezionati.size < 6) {
        let numRandom = Math.floor(Math.random() * listaOfferte.length);
        if (!numSelezionati.has(numRandom)) {
          numSelezionati.add(numRandom);
          let offertaRandom = listaOfferte[numRandom];
          listaShowOfferte.push(offertaRandom);
        }
      }
      setData(listaShowOfferte);
    } catch (error) {
      console.error("Errore durante la richiesta: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CustomNavbar id="marginNav" />
      <Container className="my-auto">
        <Row className="justify-content-center">
          <h2 className="margineH2 mx-auto my-5 ">
            {" "}
            Lasciati ispirare dalle nostre offerte speciali!
          </h2>
          {data?.map((data) => (
            <Col xs={12} md={6} lg={4} key={data?.id}>
              <SingleCard data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default TuttiViaggi;
