import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "../api/axios";

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    nome: "",
    cognome: "",
    email: "",
    età: 0,
    pernotazione: {
      numeropreotazione: generaCodice(),
      dataprenotazione: getCurrentDate(),
    },
  });

  const urlCliente = `/cliente`;
  const token = `eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJwYWxteTkyQGdtYWlsLmNvbSIsImlhdCI6MTY4NDg1MjMzMywiZXhwIjoxNjkyNzQxNzMzfQ.ZKaIyp5rTt67v3jq4hC5M5A_eVWrIa4Vo0lFWGYSZAFRb58hp-xBRuKGls2ty1Rr`;

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

  // Funzione per gestire il cambiamento dei campi del form
  const handleChange = (e) => {
    const { nome, value } = e.target;
    setBookingData({ ...bookingData, [nome]: value });
  };

  // Funzione per gestire la sottomissione del form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        urlCliente,
        { bookingData },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      if (!error?.response) {
        console.log("C'è stato un errore nel contattare il server");
      }
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="formprenotazione p-3">
        <Form.Label>Nome:</Form.Label>
        <Form.Control
          type="text"
          name="nome"
          value={bookingData.nome}
          onChange={handleChange}
          placeholder="Nome"
        />

        <Form.Label>Cognome:</Form.Label>
        <Form.Control
          type="text"
          name="cognome"
          value={bookingData.cognome}
          onChange={handleChange}
          placeholder="Cognome"
        />

        <Form.Label>Email:</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={bookingData.email}
          onChange={handleChange}
          placeholder="Email"
        />

        <Form.Label>Età:</Form.Label>
        <Form.Control
          type="text"
          name="age"
          value={bookingData.age}
          onChange={handleChange}
          placeholder="Età"
        />

        <Button type="submit">Prenota</Button>
      </Form>
    </>
  );
};

export default BookingForm;
