import "../styles/registrationForm.css";
import { useState, useEffect, useRef } from "react";
import CustomNavbar from "./CustomNavbar";
//import { useLocalState } from "../util/UseLocalStorage";
import { Button, Form } from "react-bootstrap";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
//import AuthContext from "../context/AuthProvider";

const Login = () => {
  /* const { setAuth } = useContext(AuthContext); */
  const loginUrl = `/auth/login`;

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
    e.preventDefault();

    // Validazione dei campi di input
    if (!username || !password) {
      // Gestione dell'errore per campi vuoti o nulli
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
      console.log(response.data);
      console.log(response.data.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
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
      //errRef.current.focus();
    }
  };

  return (
    <>
      <CustomNavbar className="mynavbar" claim="Were dreams come true!" />
      {success ? (
        <Dashboard />
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h4 className="ms-5 mb-3"> Sign in </h4>

          <Form onSubmit={handleSubmit} className="p-3">
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
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
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
              onClick={handleSubmit}
            >
              LOGIN
            </Button>
          </Form>
          <p className="mt-4">
            Non hai ancora un account? <br />
            <Link to="/register"> Registrati qui </Link>
          </p>
        </section>
      )}
    </>
  );
};

export default Login;
