import "../styles/registrationForm.css";
import { Form, Button, Col } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faXmark,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomNavbar from "./CustomNavbar";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";

const Register = () => {
  const navigate = useNavigate();

  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/;
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const registerUrl = `/auth/register`;

  const userRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const errRef = useRef();

  const [username, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(username);
    console.log(result);
    console.log(username);
    setValidName(result);
  }, [username]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPwd;
    setValidMatch(match);
  }, [password, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //double check
    const check1 = USER_REGEX.test(username);
    const check2 = PWD_REGEX.test(password);
    if (!check1 || !check2) {
      setErrMsg("Accesso negato! username o password errata!");
      return;
    }

    try {
      const response = await axios.post(registerUrl, {
        username: username,
        email: email,
        password: password,
      });
      console.log(response.data);
      console.log(JSON.stringify(response));
      setSuccess(true);
      navigate("/login");
    } catch (error) {
      if (!error?.response) {
        setErrMsg("C'è stato un errore nel contattare il server");
      } else if (error.response?.status === 400) {
        setErrMsg("Questo username esiste già!");
      }
      errRef.current?.focus();
    }
  };

  //REGISTRATION FORM
  return (
    <>
      <CustomNavbar claim="Registrati qui!" />

      <Col xs={12} className="authForm">
        <p
          ref={errRef}
          className={errMsg ? "errMsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <Col className="titolo mx-auto">
          <p>Per prenotare il tuo pacchetto vacanza</p>
        </Col>
        <h4 className="mb-3 text-center w-100"> Registrati</h4>

        <Form onSubmit={handleSubmit} className="p-5 mx-auto border rounded-2">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>
              Username:
              <span className={validName ? "valid" : "d-none"}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
              </span>
              <span className={validName || !username ? "d-none" : "invalid"}>
                <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
              </span>
            </Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
            />
            <p
              id="uidnote"
              className={
                userFocus && username && !validName ? "instructions" : "d-none"
              }
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "#0dcaf0" }}
              />
              L'username deve essere formato da 4 a 24 caratteri. <br />
              Deve iniziare con una lettera. <br />
              Può contenere caratteri speciali, maiuscole e numeri.
            </p>
          </Form.Group>

          {/* EMAIL */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>
              Email:
              <span className={validEmail ? "valid" : "d-none"}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
              </span>
              <span className={validEmail || !email ? "d-none" : "invalid"}>
                <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
              </span>
            </Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={validEmail ? "false" : "true"}
              aria-describedby="emailNote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
            <p
              id="emailNote"
              className={
                emailFocus && email && !validEmail ? "instructions" : "d-none"
              }
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "#0dcaf0" }}
              />
              L'email deve essere valida. <br />
              Assicurati di inserire un indirizzo email corretto.
            </p>
          </Form.Group>

          {/* PASSWORD */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>
              Password:
              <span className={validPassword ? "valid" : "d-none"}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
              </span>
              <span
                className={validPassword || !password ? "d-none" : "invalid"}
              >
                <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
              </span>
            </Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Password"
              ref={passwordRef}
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby="passwordnote"
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p
              id="passwordnote"
              className={
                passwordFocus && username && !validPassword
                  ? "instructions"
                  : "d-none"
              }
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "#0dcaf0" }}
              />
              La password deve contenere almeno 8 caratteri. <br />
              Deve contenere almeno una lettera maiuscola, <br />
              Deve contenere almeno una lettera minuscola <br />
              Deve contenere almeno un carattere speciale tra !, @, #, $ o %{" "}
              <br />
              Deve contenere almeno un numero.
            </p>
          </Form.Group>

          {/* METCHED PASSWORD */}
          <Form.Group className="mb-3" controlId="form">
            <Form.Label>
              Conferma Password:
              <span className={validMatch && matchPwd ? "valid" : "d-none"}>
                <FontAwesomeIcon icon={faCheck} style={{ color: "#00ff00" }} />
              </span>
              <span className={validMatch || !matchPwd ? "d-none" : "invalid"}>
                <FontAwesomeIcon icon={faXmark} style={{ color: "#ff0000" }} />
              </span>
            </Form.Label>
            <Form.Control
              type="password"
              required
              placeholder="Conferma Password"
              ref={passwordRef}
              autoComplete="off"
              onChange={(e) => setMatchPwd(e.target.value)}
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={matchFocus && !validMatch ? "instructions" : "d-none"}
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                style={{ color: "#0dcaf0" }}
              />
              La password deve corrispondere alla password precedente.
            </p>
          </Form.Group>

          <Form.Group
            className="mb-3"
            controlId="formBasicMatchPwd"
          ></Form.Group>
          <Button
            disabled={
              !validName || !validPassword || !validMatch ? true : false
            }
            variant="primary"
            type="button "
            className="bottone"
          >
            REGISTRAMI
          </Button>
        </Form>
        <Col className="ms-5">
          <p className="mt-3 mx-auto">
            Hai già un account? <br />
            <Link to="/login">Accedi qui </Link>
          </p>
        </Col>
      </Col>
    </>
  );
};

export default Register;
