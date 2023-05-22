import { Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SingleCard = (props) => {
  const navigate = useNavigate();
  return (
    <Card>
      <Link to={"/detail/" + props.data.id}>
        <Card.Img
          className="img-fluid"
          variant="top"
          src={props.data.immagineurl}
          alt="offerta vacanza"
        />
      </Link>
      <Card.Body>
        <Card.Title>{props.data.citta}</Card.Title>
        <Card.Text>{props.data.descrizione}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          {props.data.datanizio} - {props.data.datafine}
        </ListGroup.Item>
        <ListGroup.Item>{props.data.alloggio}</ListGroup.Item>
        <ListGroup.Item>- {props.data.preferenze}</ListGroup.Item>
        <ListGroup.Item>- {props.data.prezzo}</ListGroup.Item>
      </ListGroup>
      <Button
        className="bottone bg-info text-primary fs-6"
        onClick={() => navigate("/details/" + props.data.id)}
      >
        Mostra eventi
      </Button>
    </Card>
  );
};

export default SingleCard;
