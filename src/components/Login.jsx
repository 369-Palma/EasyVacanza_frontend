import { useState } from "react";
import { useLocalState } from "../util/UseLocalStorage";
import { Button, Form } from "react-bootstrap";

const Login = () => {
  const [jwt, setJwt] = useLocalState("", "jwt");

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function sendLoginRequest() {
    const reqBody = {
      username: username,
      password: password,
    };

    fetch("api/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        if (response.status === 200) {
          return Promise.all([response.json(), response.headers]);
        } else {
          return Promise.reject("Username o password errata");
        }
      })
      .then(([body, headers]) => {
        setJwt(headers.get("authorization"));
        window.location.href = "dashboard";
      })
      .catch((message) => {
        alert(message);
      });
  }

  return (
    <Form className="p-3">
      <h4> Sign in </h4>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="email"
          required
          placeholder="Username"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button
        className="bottone"
        id="submit"
        variant="primary"
        type="button"
        onClick={() => sendLoginRequest()}
      >
        LOGIN
      </Button>
    </Form>
  );
};

export default Login;
