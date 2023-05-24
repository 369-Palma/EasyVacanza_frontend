import { Row, Col, Accordion } from "react-bootstrap";
import { faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AccordionPrenotazione = ({ nome, cognome, email, prenotazioni }) => {
  const [data, setData] = useState({});
  const [idCliente, setIdCliente] = useState(24);

  const urlCliente = `/cliente/`;

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Row>
      <h2> Prenotazione avvenuta con successo!</h2>
      <Col>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Dati della tua prenotazione</Accordion.Header>
            <Accordion.Body>
              <p>
                Gentile
                <strong>
                  ${nome} ${cognome}
                </strong>
                , grazie per aver scelto Easy Vacanza! Ecco i dettagli della tua
                prenotazione.
                <br />
                Il tuo codice di prenotazione è:
                <strong> ${prenotazioni?.numeroprenotazione}</strong>
                <br />A breve riceverà una email all'indirizzo
                <strong> ${email}</strong> . Ricordati di controllare nella
                cartella dello spam!
                <span className="ps-2">
                  <FontAwesomeIcon icon={faFaceSmileWink} />
                </span>
              </p>
              <p>
                Hai esigenze particolari?
                <Link to="/contatti"> Scrivici qui </Link>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Informazioni sul vostro pacchetto vacanza
            </Accordion.Header>
            <Accordion.Body></Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  );
};

export default AccordionPrenotazione;
