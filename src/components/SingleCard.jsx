import "../styles/singleCard.css";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SingleCard = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  return (
    <>
      {data?.numeroMax - data?.numeroOspitiPrenotati < 1 ? (
        <Card className="d-none"></Card>
      ) : (
        <Card className="offerta mb-4">
          <Link to={"/details/" + data?.id}>
            <Card.Img
              className="img-fluid"
              variant="top"
              src={data?.immagineurl}
              alt="offerta vacanza"
            />
          </Link>
          <Card.Body>
            <div className="d-flex justify-content-between ">
              <Card.Title className="stileFamily">{data?.citta}</Card.Title>
              {data?.numeroMax - data?.numeroOspitiPrenotati <= 7 ? (
                <ListGroup.Item className="disponibili">
                  Solo {data?.numeroMax - data?.numeroOspitiPrenotati} posti
                  disponibili!
                </ListGroup.Item>
              ) : (
                <ListGroup.Item className="d-none"></ListGroup.Item>
              )}
            </div>
            <Card.Text>{data?.descrizione}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              {data?.datainizio} - {data?.datafine}
            </ListGroup.Item>
            <ListGroup.Item>{data?.alloggio}</ListGroup.Item>
            <ListGroup.Item> {data?.preferenza}</ListGroup.Item>
            <ListGroup.Item> {data?.prezzo} €</ListGroup.Item>
          </ListGroup>
          <Button
            className="bottone text-light text-primary fs-6"
            onClick={() => navigate("/details/" + data.id)}
          >
            DETTAGLI
          </Button>
        </Card>
      )}
    </>
  );
};

export default SingleCard;
