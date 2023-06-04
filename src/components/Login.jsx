import "../styles/registrationForm.css";
import { useState, useEffect, useRef } from "react";
import CustomNavbar from "./CustomNavbar";
import { Col, Button, Form } from "react-bootstrap";
import axios from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Login = ({ setToken }) => {
  const loginUrl = `/auth/login`;

  const navigate = useNavigate();

  const usernameRef = useRef(null);
  const errRef = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    //e.preventDefault();

    // Validazione dei campi di input
    if (!username || !password) {
      setErrMsg("Inserisci username e password");
      return;
    }

    try {
      const response = await axios.post(
        loginUrl,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      setToken(response.data.accessToken);

      setSuccess(true);
      navigate("/dashboard");
    } catch (error) {
      if (!error?.response) {
        setErrMsg("Non c'è stata risposta dal server!");
      } else if (error.response?.status === 400) {
        setErrMsg("Username o Password errata");
      } else if (ErrorEvent.response?.status === 401) {
        setErrMsg("Mancata autorizzazione");
      } else {
        setErrMsg("Il login non è andato a buon fine!");
      }
    }
  };

  return (
    <>
      <CustomNavbar claim="Accedi alla tua area privata!" />

      <Col xs={12} className="authForm">
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <Col className="titolo mx-auto">
          <p>Per accedere alla tua area privata</p>
        </Col>
        <h4 className="mb-3 text-center w-100"> Sign in </h4>

        <Form
          onSubmit={handleSubmit}
          className="formBox p-5 mx-auto border rounded-2"
        >
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Username"
              autoComplete="off"
              ref={usernameRef}
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </Form.Group>
          <Form.Group className="my-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <Button
            className="bottone mt-3"
            id="submit"
            variant="primary"
            type="button"
            onClick={handleSubmit}
          >
            LOGIN
          </Button>
        </Form>
        <Col className="ms-5">
          <p className="mt-3 mx-auto">
            Non hai ancora un account? <br />
            <Link to="/register"> Registrati qui </Link>
          </p>
        </Col>
      </Col>
    </>
  );
};

export default Login;
