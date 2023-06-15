import { Form, Button, Row, Col, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import CustomNavbar from "./CustomNavbar";
import SingleCard from "./SingleCard";

const FiltriEvento = () => {
  const [data, setData] = useState([]);
  const [evento, setEvento] = useState("");
  const [success, setSuccess] = useState(false);

  const url = `/vacanze/attivita/`;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url + evento);
        setData(response.data.content);
        console.log(response.data.content);
        setSuccess(true);
      } catch (error) {
        console.log("Ops, non è stato possibile contattare il server!", error);
      }
    };

    if (evento) {
      fetchData();
    } else {
      setData([]);
      setSuccess(false);
    }
  }, [evento]);

  return (
    <>
      <CustomNavbar className="mynavbar" />
      <Container>
        <h2 className="margineH2 text-center">
          Scegli la tua attività preferita
        </h2>

        <Form onSubmit={handleSubmit} className="mb-5 mx-auto w-50">
          <Form.Group className="mb-3">
            <Form.Label>Attività</Form.Label>
            <Form.Control
              as="select"
              value={evento}
              onChange={(event) => setEvento(event.target.value)}
            >
              <option value="">Tipologia di evento</option>
              <option value="Escursione">Escursione</option>
              <option value="Arrampicata">Arrampicata</option>
              <option value="Esplorazione">Esplorazione</option>
              <option value="Canottaggio">Canottaggio</option>
              <option value="Degustazione">Degustazione</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Container>
      <Row className="offerta mx-auto my-auto">
        {success && data?.length !== 0 ? (
          data.map((item) => (
            <Col
              className="mx-auto d-flex"
              xs={12}
              md={6}
              lg={4}
              key={item?.id}
            >
              <SingleCard data={item} />
            </Col>
          ))
        ) : success && data.length === 0 ? (
          <p className="smallBold">Non ci sono risultati per questa opzione</p>
        ) : (
          <p className="smallBold">Scegli un' opzione per vedere i risultati</p>
        )}
      </Row>
    </>
  );
};

export default FiltriEvento;
