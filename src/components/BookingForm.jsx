import React, { useState } from "react";

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    nome: "",
    cognome: "",
    email: "",
    startDate: "",
    endDate: "",
    // altri campi del form
  });

  // Funzione per gestire il cambiamento dei campi del form
  const handleChange = (event) => {
    const { nome, value } = event.target;
    setBookingData({ ...bookingData, [nome]: value });
  };

  // Funzione per gestire la sottomissione del form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Effettua l'invio dei dati al backend o esegui altre operazioni necessarie
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        nome="nome"
        value={bookingData.nome}
        onChange={handleChange}
        placeholder="Nome"
      />
      <input
        type="text"
        nome="cognome"
        value={bookingData.nome}
        onChange={handleChange}
        placeholder="Nome"
      />
      <input
        type="email"
        nome="email"
        value={bookingData.email}
        onChange={handleChange}
        placeholder="Indirizzo email"
      />
      <input
        type="date"
        nome="startDate"
        value={bookingData.startDate}
        onChange={handleChange}
        placeholder="Data di inizio"
      />
      <input
        type="date"
        nome="endDate"
        value={bookingData.endDate}
        onChange={handleChange}
        placeholder="Data di fine"
      />
      {/* Altri campi del form */}
      <button type="submit">Prenota</button>
    </form>
  );
};

export default BookingForm;
