import "../styles/searchTab.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "../styles/home.css";
import "../assets/img/spiaggia.jpg";
import SingleCard from "./SingleCard";
import Carosello from "./Carosello";
import { LocalDate, DateTimeFormatter } from "@js-joda/core";

const SearchTab = () => {
  const [data, setData] = useState([]);
  const [citta, setCitta] = useState("");
  const [datainizio, setDatainizio] = useState("");
  const [showSingleCard, setShowSingleCard] = useState(false);

  const urlCitta = `/vacanze/citta/`;
  const urlDate = `/vacanze/datainizio/`;

  const handleCitySearch = async (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      try {
        const response = await axios.get(urlCitta + citta);
        setData(response.data.content);
        setShowSingleCard(response.data.content.length === 1);
        console.log(response.data.content);
      } catch (error) {
        console.log("Ops, non è stato possibile contattare il server!", error);
      }
      setCitta("");
    }
  };

  const handleDateSearch = async (event) => {
    if (event.key === "Enter") {
      try {
        const formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        const parsedDate = LocalDate.parse(datainizio, formatter);
        const formattedDate = parsedDate.format(formatter);
        const response = await axios.get(urlDate + formattedDate);
        setData(response.data.content);
        setShowSingleCard(response.data.content.length === 1);
        console.log(response.data.content);
      } catch (error) {
        console.error(
          "Ops, non è stato possibile contattare il server!",
          error
        );
      }
      setDatainizio("");
    }
  };

  useEffect(() => {
    console.log(data);
  }, [datainizio, citta]);

  return (
    <>
      <section className="cover">
        <div className="overlay"></div>
        <Container className="searchContent">
          <div>
            <h1> Cerca la tua vacanza </h1>
            <Form className="formContainer mx-auto align-center">
              <Form.Label className="fs-2">La tua destinazione:</Form.Label>
              <Form.Control
                className="searchCity d-flex mt-1 mb-3"
                id="searchTab"
                value={citta}
                onChange={(event) => setCitta(event.target.value)}
                placeholder="City"
                autoComplete="off"
                onKeyPress={(event) => handleCitySearch(event)}
                type="text"
              />

              <Form.Label className="fs-2 w-max ">
                La tua data di arrivo:
              </Form.Label>
              <Form.Control
                className="searchCity d-flex mt-1 mb-3"
                id="searchTab"
                value={datainizio}
                onChange={(event) => setDatainizio(event.target.value)}
                placeholder="data di arrivo"
                autoComplete="off"
                onKeyPress={(event) => handleDateSearch(event)}
                type="date"
              />
            </Form>
          </div>
        </Container>
      </section>
      <Row className="offerta mx-auto my-auto">
        {data && data.length === 1 && showSingleCard && (
          <Col
            xs={8}
            className="cardSingola sx-justify-content-center mx-auto my-3 text-md-center"
          >
            <SingleCard data={data[0]} />
          </Col>
        )}
        {data && data?.length > 1 && !showSingleCard ? (
          <Col
            xs={11}
            md={8}
            lg={6}
            className="justify-content-center mx-auto my-3 text-md-center"
          >
            <Carosello data={data} />
          </Col>
        ) : (
          <Col className="d-none"></Col>
        )}
      </Row>
    </>
  );
};

export default SearchTab;
