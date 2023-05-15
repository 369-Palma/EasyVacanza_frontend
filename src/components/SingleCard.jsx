import { Card, ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const SingleCard = ({ data }) => {
  const navigate = useNavigate();
  return (
    <Card>
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
          {data?.datanizio} - {data?.datafine}
        </ListGroup.Item>
        <ListGroup.Item>{data?.alloggio}</ListGroup.Item>
        <ListGroup.Item>- {data?.preferenze}</ListGroup.Item>
        <ListGroup.Item>- {data?.prezzo}</ListGroup.Item>
      </ListGroup>
      <Button onClick={() => navigate("/details/" + data?.id)}>
        Mostra eventi
      </Button>
    </Card>
  );
};

export default SingleCard;
