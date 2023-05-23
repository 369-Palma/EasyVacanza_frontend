import { useState, useEffect, useRef, useContext } from "react";
//import { useLocalState } from "../util/UseLocalStorage";
import { Button, Form } from "react-bootstrap";
import axios from "../api/axios";
import { Link } from "react-router-dom";
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
      console.log(response.accessToken);
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

  /* const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    setSuccess(true);

    try {
      const response = await axios.post(
        loginUrl,
        JSON.stringify({ username, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      // console.log(JSON.stringify(response));
      console.log(response.data);
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, accessToken });

      setUsername("");
      setPassword("");
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

      errRef.current?.focus();
    }
  }; */

  return (
    <>
      {success ? (
        <article>
          <h1> You are logged in!</h1>
          <br />
          <p>
            {/* QUI ANDRA IL NOME DEL COMPONENTE DOVE SOLO I REGISTRATI POSSONO ACCEDERE */}
            <Link to="/Prenotation form">
              Benvenuto nella tua area privata! <br />
              Prenota la tua vacanza da sogno!
            </Link>
          </p>
        </article>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h4> Sign in </h4>

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
