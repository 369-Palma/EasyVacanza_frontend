import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MyPrenotazioni = () => {
  const [prenotazioni, setPrenotazioni] = useState([]);
  const params = useParams();

  return (
    <>
      <h2> Cerca la tua prenotazione:</h2>
    </>
  );
};
