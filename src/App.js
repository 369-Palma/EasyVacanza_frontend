import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CustomFooter from "./components/CustomFooter";
import HomePage from "./components/HomePage";
import TuttiViaggi from "./components/TuttiViaggi";
import Register from "./components/Register";
import Login from "./components/Login";
//import RegistrationPage from "./components/RegistrationPage";
import Dashboard from "./components/Dashboard";
import BookingForm from "./components/BookingForm";
import SpecialRequest from "./components/SpecialRequest";
import Dettaglio from "./components/Dettaglio";

const App = () => {
  const [selectedVacanza, setSelectedVacanza] = useState({});

  const handleUpdateSelectedVacanza = (vacanza) => {
    setSelectedVacanza(vacanza);
  };
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offerte" element={<TuttiViaggi />} />
        <Route
          path="/details/:id"
          element={
            <Dettaglio
              selectedVacanza={selectedVacanza}
              updateSelectedVacanza={handleUpdateSelectedVacanza}
            />
          }
        />
        <Route path="/prenotazione" element={<Register />} />
        {/* <Route path="/prenotazione" element={<RegistrationPage />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        {/* <Route path="/recensioni" element={<RecensioneForm />} /> */}
        <Route
          path="/dashboard"
          element={
            <Dashboard selectedVacanza={selectedVacanza} token={token} />
          }
        />
        <Route
          path="/prenota"
          element={
            <BookingForm
              selectedVacanza={selectedVacanza}
              token={token}
              updateSelectedVacanza={handleUpdateSelectedVacanza}
            />
          }
        />
        <Route path="/contatti" element={<SpecialRequest />} />
      </Routes>

      <CustomFooter />
    </BrowserRouter>
  );
};
export default App;
