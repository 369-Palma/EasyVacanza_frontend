import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import HomePage from "./components/HomePage";
import TuttiViaggi from "./components/TuttiViaggi";
import PackageDetails from "./components/PackageDetails";
import Register from "./components/Register";
import Login from "./components/Login";
//import RegistrationPage from "./components/RegistrationPage";
import Dashboard from "./components/Dashboard";
import BookingForm from "./components/BookingForm";
import SpecialRequest from "./components/SpecialRequest";

const App = () => {
  return (
    <BrowserRouter>
      {/* <CustomNavbar className="mynavbar" claim="Were dreams come true!" /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offerte" element={<TuttiViaggi />} />
        <Route path="/details/:vacanzaId" element={<PackageDetails />} />
        <Route path="/prenotazione" element={<Register />} />
        {/* <Route path="/prenotazione" element={<RegistrationPage />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/recensioni" element={<RecensioneForm />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/prenota" element={<BookingForm />} />
        <Route path="/contatti" element={<SpecialRequest />} />
      </Routes>

      {/*   <CustomFooter /> */}
    </BrowserRouter>
  );
};
export default App;
