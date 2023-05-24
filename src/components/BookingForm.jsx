import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "../api/axios";
import MyNav from "./MyNav";
import AccordionPrenotazione from "./AccordionPrenotazione";
const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    nome: "",
    cognome: "",
    email: "",
    age: 0,
    prenotazioni: [
      {
        numeroprenotazione: 0,
        dataprenotazione: "",
        numerospiti: 0,
        stato: "IN_ELABORAZIONE",
        vacanza: {},
      },
    ],
    testimonianze: [],
  });

  const [idCliente, setIdCliente] = useState();
  const [success, setSuccess] = useState(false);

  const urlCliente = `/cliente`;
  const token = `eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJjaW1pQGdtYWlsLmNvbSIsImlhdCI6MTY4NDk0NTU4NywiZXhwIjoxNjkyODM0OTg3fQ.MV7tJm9dqB4PLaN81h_zFC1tD7pOKQhfs8KNdlYG68uvY8U84mh33toUGiDcI6ww`;

  //funzione per settare il numero di prenotazione
  function generaCodice() {
    const min = 1000000000; // Numero minimo di 10 cifre
    const max = 9999999999; // Numero massimo di 10 cifre
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  //funzione per settare la data di prenotazione corrente
  function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // CAMBIO DI STATO
  const handleChange = (propertyName, propertyValue) => {
    setBookingData({ ...bookingData, [propertyName]: propertyValue });
  };

  // Funzione per gestire la sottomissione del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    //conversione da stringa a intero del numero ospiti.
    const numerospitiInt = parseInt(
      bookingData.prenotazioni[0].numerospiti,
      10
    );

    if (isNaN(numerospitiInt)) {
      console.error("Il valore di numerospiti non è un numero valido.");
      return;
    }

    // conversione in intero della proprietà age
    const ageInt = parseInt(bookingData.age, 10);

    if (isNaN(ageInt)) {
      console.error("Il valore del campo etè non è valido.");
    }

    //funzione per generare il numero di prenotazione,  impostare la data di prenotazione e cambiare lo stato della prenotazione in "confermato"
    const updatedPrenotazioni = {
      ...bookingData.prenotazioni[0],
      numeroprenotazione: generaCodice(),
      dataprenotazione: getCurrentDate(),
      numerospiti: numerospitiInt,
      stato: "CONFERMATO",
    };

    // Aggiorna i dati della prenotazione
    const updatedBookingData = {
      ...bookingData,
      prenotazioni: [updatedPrenotazioni],
    };
    try {
      const response = await axios.post(urlCliente, updatedBookingData, {
        headers: {
          //"Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      console.log(response.data);
      setSuccess(true);
      alert(
        `La tua richiesta è andata a buon fine. La prenotazione è stata creata con codice di prenotazione: ${updatedPrenotazioni.numeroprenotazione}`
      );
    } catch (error) {
      if (!error?.response) {
        console.log("C'è stato un errore nel contattare il server");
      }
    }
  };

  return (
    <>
      {success ? (
        <AccordionPrenotazione />
      ) : (
        <>
          <MyNav />
          <Container>
            <Row className="justify-content-center  mt-5">
              <Col xs={12} md={6}>
                <h2 className="text-center">Prenota la tua vacanza:</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo nome"
                      value={bookingData.nome}
                      onChange={(e) => {
                        console.log(e.target.value);

                        handleChange("nome", e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Cognome</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo cognome"
                      value={bookingData.cognome}
                      onChange={(e) => {
                        console.log(e.target.value);

                        handleChange("cognome", e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Età</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci la tu età"
                      value={bookingData.ageInt}
                      onChange={(e) => {
                        console.log(e.target.value);

                        handleChange("age", e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Inserisci la tua email"
                      value={bookingData.email}
                      onChange={(e) => {
                        console.log(e.target.value);
                        handleChange("email", e.target.value);
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Numero di ospiti</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      value={bookingData.prenotazioni[0].numerospiti}
                      onChange={(e) => {
                        console.log(e.target.value);
                        const updatedPrenotazioni = [
                          ...bookingData.prenotazioni,
                        ];
                        updatedPrenotazioni[0].numerospiti = e.target.value;
                        handleChange("prenotazioni", updatedPrenotazioni);
                      }}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                      <option>13</option>
                      <option>14</option>
                      <option>15</option>
                      <option>16</option>
                      <option>17</option>
                      <option>18</option>
                      <option>19</option>
                      <option>20</option>
                    </Form.Select>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="d-block mx-auto"
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default BookingForm;
