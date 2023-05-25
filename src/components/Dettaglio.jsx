import "../styles/dettaglio.css";
import { useEffect, useState } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Spinner,
  Alert,
  Badge,
  ListGroup,
} from "react-bootstrap";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import CustomNav from "./CustomNavbar";

const Dettaglio = () => {
  const { id } = useParams();
  console.log("PARAMS", id);

  const [data, setData] = useState({});
  const urlVacanza = `vacanza/id/${id}`;

  useEffect(() => {
    getData();
  }, [id]);

  const getData = async function () {
    try {
      const response = await axios.get(urlVacanza);
      setData(response.data);
      console.log(response.data);
      // Resto del codice...
    } catch (error) {
      console.log("C'è stato un errore nel contattare il server", error);
    }
  };

  return (
    <>
      {/* <CustomNav className="mynavbar" claim="Scopri di più" />
      <img className="coverpic" src={data?.immagineurl} alt="vacanza" />
      <h1>
        Visita <strong>{data?.citta}</strong>
      </h1>
      <p>{data?.descrizione}</p>
      <h2>EVENTO IMPERDIBILE</h2>
      <p>{data?.attivita?.descrizione}</p>
      <ListGroup>
        {testimonianze.length > 0 ? (
          testimonianze.map((test) => (
            <ListGroup.Item key={`feedback-${test.id}`}>
              <Badge bg="dark" className="me-2">
                {test.nome} {test.cognome}
              </Badge>
              {test.feedback}
              {test.rating}
            </ListGroup.Item>
          ))
        ) : (
          <ListGroup.Item>Nessun elemento da visualizzare</ListGroup.Item>
        )}
      </ListGroup> */}
    </>
  );
};

export default Dettaglio;
