import "../styles/singleCard.css";
import { Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SingleCard = (props) => {
  const navigate = useNavigate();
  const data = props.data;
  return (
    <Card className="offerta mb-4">
      <Link to={"/detail/" + data?.id}>
        <Card.Img
          className="img-fluid"
          variant="top"
          src={data?.immagineurl}
          alt="offerta vacanza"
        />
      </Link>
      <Card.Body>
        <Card.Title>{data?.citta}</Card.Title>
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
        className="bottone bg-info text-primary fs-6"
        onClick={() => navigate("/details/" + data.id)}
      >
        DETTAGLI
      </Button>
    </Card>
  );
};

export default SingleCard;
