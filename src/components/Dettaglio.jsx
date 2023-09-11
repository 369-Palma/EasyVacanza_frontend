import "../styles/dettaglio.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Container, Row, Col, Button, Badge, ListGroup } from "react-bootstrap";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import CustomNav from "./CustomNavbar";
import { scrollToTop } from "../functions/functions";

const Dettaglio = ({ selectedVacanza, updateSelectedVacanza }) => {
  scrollToTop();
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("PARAMS", id);

  //funzione per memorizzare i dati della vacanza selezionata e reindirizzamento al from di registrazione
  const handlePrenotaClick = () => {
    updateSelectedVacanza(data);
    navigate("/prenotazione");
    scrollToTop();
  };

  const [data, setData] = useState({});
  const [attivita, setAttivita] = useState([]);
  const [testimonianze, setTestimonianze] = useState([]);
  const urlVacanza = `vacanze/id/${id}`;

  useEffect(() => {
    getData();
    console.log(attivita);
    console.log(testimonianze);
  }, [id]);

  const getData = async function () {
    try {
      const response = await axios.get(urlVacanza);
      setData(response.data);
      console.log(response.data);
      setAttivita(response.data.attivita);
      console.log(response.data.attivita);
      setTestimonianze(response.data?.attivita[0]?.testimonianze);
      console.log(response.data?.attivita[0]?.testimonianze);
    } catch (error) {
      console.log("C'è stato un errore nel contattare il server", error);
    }
  };

  return (
    <>
      <CustomNav className="mynavbar" claim="Scopri di più" />
      <Container>
        <Row className="cardVacanza flex-row ">
          <Col sx={12} md={8} lg={6} className="h-25 my-auto">
            <img
              className="coverpic w-100"
              src={data?.immagineurl}
              alt="vacanza"
            />
          </Col>

          <Col className="ps-4">
            <h1 className="mx-auto my-3">
              Visita <strong>{data?.citta}</strong>
            </h1>
            <h3 className="mb-3">{data?.descrizione}</h3>
            <p>
              {" "}
              Dal <span className="minuscolo">{data?.datainizio}</span> al{" "}
              <span className="minuscolo"> {data?.datafine}</span> presso{" "}
              <span className="minuscolo"> {data?.indirizzo}</span>. <br />
              Alloggerai presso il nostro
              <span className="minuscolo"> {data?.alloggio} </span>. <br />
              Riesci già a sentire il profumo della {data?.tipoluogo}? Prenota
              subito!
            </p>
            <div className="d-flex">
              <Button className="bottone" onClick={handlePrenotaClick}>
                PRENOTA
              </Button>
              {data?.numeroMax - data?.numeroOspitiPrenotati <= 5 ? (
                <p className="disponibili ms-4 mt-2">
                  Solo {data?.numeroMax - data?.numeroOspitiPrenotati} posti
                  disponibili!
                </p>
              ) : (
                <p className="d-none"></p>
              )}
            </div>
          </Col>
          <Row className="flex-column">
            <Col className="my-3">
              <h2>
                Attività proposta:{" "}
                {/* <strong> {data?.attivita[0].attivita}</strong> */}
                <strong> {attivita[0]?.attivita}</strong>
              </h2>
              <p>{attivita[0]?.descrizione}.</p>
            </Col>
            <Col>
              <h3 className="my-3"> Cosa dicono i nostri clienti?</h3>
              <ListGroup className="mb-5">
                {testimonianze.length > 0 ? (
                  testimonianze.map((test) => (
                    <ListGroup.Item key={`feedback-${test.id}`}>
                      <Row>
                        <Col>
                          <Badge bg="dark" className="me-2">
                            {test.nome} {test.cognome}
                          </Badge>
                        </Col>
                        <Row className="flex-column">
                          <Col>{test.feedback}</Col>
                          <Col>Rating: {test.rating}/5</Col>
                        </Row>
                      </Row>
                    </ListGroup.Item>
                  ))
                ) : (
                  <ListGroup.Item>
                    Nessun elemento da visualizzare
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Dettaglio;
