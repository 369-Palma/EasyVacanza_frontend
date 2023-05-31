import "../styles/specialRequest.css";
import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "../api/axios";
import MyNav from "./MyNav";
import AccordionPrenotazione from "./AccordionPrenotazione";

const BookingForm = ({ selectedVacanza, token }) => {
  const [bookingData, setBookingData] = useState({
    nome: "",
    cognome: "",
    email: "",
    age: 0,
    prenotazioni: [
      {
        numeroprenotazione: 0,
        dataprenotazione: "",
        numerospiti: 1,
        stato: "IN_ELABORAZIONE",
        vacanza: selectedVacanza,
      },
    ],
    testimonianze: [],
  });

  const [idCliente, setIdCliente] = useState();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({});
  const [prenotazioni, setPrenotazioni] = useState([]);
  const [accodion, setAccodion] = useState();

  const urlPost = `/cliente`;

  useEffect(() => {
    if (selectedVacanza) {
      setBookingData({
        ...bookingData,
        prenotazioni: [
          { ...bookingData.prenotazioni[0], vacanza: selectedVacanza },
        ],
      }); // Riprendi i dati della vacanza selezionata
    }
  }, [selectedVacanza]);

  //funzione per settare il numero di prenotazione
  function generaCodice() {
    const min = 1000000000;
    const max = 9999999999;
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
    if (propertyName === "numerospiti") {
      const updatedPrenotazioni = [
        {
          ...bookingData.prenotazioni[0],
          numerospiti: propertyValue,
        },
      ];
      setBookingData({ ...bookingData, prenotazioni: updatedPrenotazioni });
    } else {
      setBookingData({ ...bookingData, [propertyName]: propertyValue });
    }
  };

  // Funzione per gestire la sottomissione del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se la vacanza selezionata è presente
    if (!selectedVacanza) {
      console.log("Errore: nessuna vacanza selezionata");
      return;
    }

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
      console.error("Il valore del campo età non è valido.");
      return;
    }

    //funzione per generare il numero di prenotazione, impostare la data di prenotazione e cambiare lo stato della prenotazione in "confermato"
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

    console.log(token);

    try {
      const postResp = await axios.post(urlPost, updatedBookingData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });

      console.log(postResp.data);
      setSuccess(true);
      setIdCliente(postResp.data.id);
      setData(postResp.data);
      console.log(postResp.data);
      setPrenotazioni(postResp.data?.prenotazioni[0]);
      console.log(postResp.data.prenotazioni[0]);
      setAccodion(updatedBookingData);

      alert(
        `La tua richiesta è andata a buon fine. La prenotazione è stata creata con codice di prenotazione: ${updatedPrenotazioni.numeroprenotazione}`
      );
    } catch (error) {
      if (!error?.postResp) {
        console.log("C'è stato un errore nel contattare il server");
      }
    }
  };

  return (
    <>
      <MyNav />
      {success && idCliente ? (
        <>
          <AccordionPrenotazione
            nome={data.nome}
            cognome={data.cognome}
            prenotazioni={accodion.prenotazioni}
            email={data.email}
            token={token}
            accodion={accodion}
            //cliente={cliente}
          />
        </>
      ) : (
        <>
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
                      type="number"
                      placeholder="Inserisci la tua età"
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
                      value={
                        bookingData.prenotazioni?.length > 0 &&
                        bookingData.prenotazioni[0].numerospiti
                      }
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
