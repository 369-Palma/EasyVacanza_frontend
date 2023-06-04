import "../styles/dashboard.css";
import { Row, Col, Accordion, Button } from "react-bootstrap";
import { faFaceSmileWink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "../api/axios";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const AccordionPrenotazione = ({
  accodion,
  nome,
  cognome,
  prenotazioni,
  email,
  token,
}) => {
  const urlPrenotazione = `/prenotazioni/numero_prenotazione/`;
  const [data, setData] = useState();

  const getPrenotazione = async function () {
    console.log(urlPrenotazione);
    console.log(prenotazioni[0]?.numeroprenotazione);

    try {
      const response = await axios.get(
        urlPrenotazione + prenotazioni[0]?.numeroprenotazione,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      console.log("risposta ok");
      setData(response.data);
    } catch (error) {
      if (!error?.response) {
        console.log("C'è stato un errore nel contattare il server", error);
      }
    }
  };

  useEffect(() => {
    getPrenotazione();
  }, []);

  //per invio email
  emailjs.init(`3cG7_5IGDFHm5po4E`);
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        to_email: email,
        from_name: "Easy Vacanza",
        subject: "Dettagli della tua prenotazione",
        data: data,
        attivita: data.vacanza.attivita[0].attivita,
        accodion: accodion,
        difficolta: data.vacanza.attivita[0].difficolta,
        prenotazioni,
      };
      await emailjs.send("service_uf2isy6", "template_bzx7lll", templateParams);
      toast.success("Email inviata con successo");
      e.target.reset();
    } catch (error) {
      console.log(error.text);
    }
  };

  return (
    <Row>
      <h2> Prenotazione avvenuta con successo!</h2>
      <Col xs={12}>
        <h6>
          {" "}
          Clicca per ricevere il dettaglio della tua prenotazione al tuo
          indirizzo email.{" "}
        </h6>
        <Button className="bottone my-3" onClick={sendEmail}>
          Inviami il dettaglio
        </Button>
      </Col>
      <Col xs={12}>
        {prenotazioni && prenotazioni?.length > 0 ? (
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header className="fs-2 text-uppercase fw-bold">
                {" "}
                Dati della tua prenotazione
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Gentile
                  <strong>
                    {" "}
                    {nome} {cognome}
                  </strong>
                  ,
                  <br />
                  grazie per aver scelto Easy Vacanza! <br />
                  Ecco i dettagli della tua prenotazione.
                  <br />
                  Il tuo codice di prenotazione è:
                  <strong> {data?.numeroprenotazione}</strong>
                  <br />A breve riceverai una email all'indirizzo
                  <strong> {email}</strong>. Ricordati di controllare nella
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
              <Accordion.Header className="fs-2 text-uppercase fw-bold">
                Informazioni sul tuo pacchetto vacanza
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  {" "}
                  Prepara le valige,{" "}
                  <strong>{prenotazioni[0]?.vacanza?.citta}</strong> ti aspetta!
                </p>
                <p>
                  Dal {prenotazioni[0]?.vacanza?.datainizio} al{" "}
                  {prenotazioni[0]?.vacanza?.datafine} alloggerai presso{" "}
                  {prenotazioni[0]?.vacanza?.indirizzo} e potrai partecipare
                  alla nostra attività,{" "}
                  <strong>
                    {prenotazioni[0]?.vacanza?.attivita[0]?.attivita}
                  </strong>
                  . <br />
                  Ti ricordiamo che l'attività ha un di livello di difficoltà{" "}
                  {prenotazioni[0]?.vacanza?.attivita[0]?.difficolta}. Se hai
                  richieste o domande puoi contattaci{" "}
                  <Link to="/contatti"> qui </Link>
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ) : (
          <p>Non ci sono prenotazioni.</p>
        )}
      </Col>
    </Row>
  );
};

export default AccordionPrenotazione;
