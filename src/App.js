import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { useLocalState } from "./util/UseLocalStorage";
import CustomNavbar from "./components/CustomNavbar";
import HomePage from "./components/HomePage";
import TuttiViaggi from "./components/TuttiViaggi";
import PackageDetails from "./components/PackageDetails";
import GalleriaEventi from "./components/GalleriaEventi";
import RegistrationPage from "./components/RegistrationPage";
import Register from "./components/Register";
import Login from "./components/Login";
/* import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import CustomFooter from "./components/CustomFooter"; */

const App = () => {
  /* const reqBody = {
    username: "foxy.92",
    password: "123456",
  }; */

  /* fetch("api/auth/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(reqBody),
  })
    .then((response) => Promise.all([response.json(), response.headers]))
    .then(([body, headers]) =>
      headers.forEach((e) => {
        console.log(e);
      })
    ); */
  //RITORNA SOLO IL VALORE DEL TOKEN PER L'AUTORIZZAZIONE
  /*  fetch("api/auth/login", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "post",
    body: JSON.stringify(reqBody),
  })
    .then((response) => Promise.all([response.json(), response.headers]))
    .then(([body, headers]) => {
      const authValue = headers.get("authorization");
      console.log(authValue);
    }); */

  return (
    <BrowserRouter>
      <CustomNavbar className="mynavbar" claim="Were dreams come true!" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offerte" element={<TuttiViaggi />} />
        <Route path="/eventi" element={<GalleriaEventi />} />
        <Route path="/details/:vacanzaId" element={<PackageDetails />} />
        <Route path="/prenotazione" element={<Register />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/login" element={<RegistrationPage />} /> */}
        {/* <Route
          path="/dshboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        /> */}
      </Routes>

      {/*   <CustomFooter /> */}
    </BrowserRouter>
  );
};
export default App;
