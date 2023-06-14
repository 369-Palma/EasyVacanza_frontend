import { Form, Button, Row, Col, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import CustomNavbar from "./CustomNavbar";
import SingleCard from "./SingleCard";

const Preferenze = () => {
  const [data, setData] = useState([]);
  const [preferenza, setPreferenza] = useState("");
  const [success, setSuccess] = useState(false);

  const url = `/vacanze/preferenza/`;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Nessun bisogno di chiamare RicercaData() qui
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url + preferenza);
        setData(response.data.content);
        console.log(response.data.content);
        setSuccess(true);
      } catch (error) {
        console.log("Ops, non è stato possibile contattare il server!", error);
      }
    };

    if (preferenza) {
      fetchData();
    } else {
      setData([]);
      setSuccess(false);
    }
  }, [preferenza]);

  return (
    <>
      <CustomNavbar className="mynavbar" />
      <Container>
        <h2 className="margineH2">
          Personalizza la ricerca della tua vacanza da sogno
        </h2>

        <Form onSubmit={handleSubmit} className="mb-5 mx-auto w-50">
          <Form.Group className="mb-3">
            <Form.Label>Preferenze</Form.Label>
            <Form.Control
              as="select"
              value={preferenza}
              onChange={(event) => setPreferenza(event.target.value)}
            >
              <option value="">Seleziona una preferenza</option>
              <option value="accessibilità_disabili">
                Accessibilità disabili
              </option>
              <option value="pet_friendly">Pet-friendly</option>
              <option value="famiglie">Famiglia</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit">Cerca</Button>
        </Form>
      </Container>
      <Row className="offerta mx-auto my-auto">
        {success && data.length > 0 ? (
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
        ) : (
          <p>Non ci sono risultati</p>
        )}
      </Row>
    </>
  );
};

export default Preferenze;
