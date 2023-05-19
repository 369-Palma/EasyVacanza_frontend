import { useState, useEffect } from "react";
//import { useLocalState } from "../util/UseLocalStorage";
import { Button, Form } from "react-bootstrap";
import axiosInstance from "../api/axios";

const Login = () => {
  /* const [jwt, setJwt] = useLocalState("", "jwt");

 

  function sendLoginRequest() {
    const reqBody = {
      username: username,
      password: password,
    };

    fetch("http://localhost:8086/api/auth/login", {
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
 */
  const loginUrl = `/auth/login`;

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    /*  if (!check1 || !check2) {
      setErrMsg(
        "Accesso negato! username o password errata! Non sei ancora registrato?"
      );
      return;
    } */

    try {
      const response = await axiosInstance.post(loginUrl, {
        username: username,
        password: password,
      });
      console.log(response.data);
      console.log(response.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("C'è stato un errore nel contattare il server");
      }
      //errRef.current.focus();
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="p-3">
      <h4> Sign in </h4>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
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
          //value={password}
          //onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className="bottone" id="submit" variant="primary" type="button">
        LOGIN
      </Button>
    </Form>
  );
};

export default Login;
