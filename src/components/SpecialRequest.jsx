import { Form, Button } from "react-bootstrap";

const SpecialRequest = () => {
  return (
    <form action="example-server.com">
      <fieldset>
        <legend>Contact me</legend>
        <div class="form-control">
          <label for="name">Name</label>
          <input type="name" id="name" placeholder="Enter your name" required />
        </div>

        <div class="form-control">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="form-control">
          <label for="message">Message</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <input type="submit" value="Send" class="submit-btn" />
      </fieldset>
    </form>
  );
  {
    /* <Form>
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
  );*/
  }
};

export default SpecialRequest;
