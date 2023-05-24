import { Form, Button } from "react-bootstrap";

const SpecialRequest = () => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Richieste Speciali</Form.Label>
        <Form.Control
          type="text"
          as="textarea"
          rows={5}
          placeholder="Domande, richieste per bambini, attrezzature..."
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="d-block mx-auto">
        Submit
      </Button>
    </Form>
  );
};

export default SpecialRequest;
