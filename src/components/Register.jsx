import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { Alert } from "bootstrap";

const Register = () => {
  function checkRegistration(password, checkedPassword) {
    if (password !== checkedPassword) {
      return (
        <Alert variant="danger"> Le passwords inserite sono diverse!</Alert>
      );
    } else {
      return (
        <Alert variant="success">
          Complimenti! Ti sei registrato correttamente!
        </Alert>
      );
    }
  }

  const [password, setPassword] = useState("");
  const [checkedPassword, setCheckedPassword] = useState("");

  return (
    <Form className="p-3">
      <h4> Registrati</h4>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" required placeholder="Username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Conferma password</Form.Label>
        <Form.Control
          type="password"
          required
          placeholder="password"
          value={checkedPassword}
          onChange={(event) => setCheckedPassword(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        onClick={() => checkRegistration()}
      >
        REGISTRAMI
      </Button>
    </Form>
  );
};

export default Register;
