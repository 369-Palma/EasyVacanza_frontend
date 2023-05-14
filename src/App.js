import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import HomePage from "./components/HomePage";
import TuttiViaggi from "./components/TuttiViaggi";
import PackageDetails from "./components/PackageDetails";
import Login from "./components/Login";
import GalleriaEventi from "./components/GalleriaEventi";

const App = () => {
  return (
    <BrowserRouter>
      <CustomNavbar claim="Were dreams come true!" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offerte" element={<TuttiViaggi />} />
        <Route path="/eventi" element={<GalleriaEventi />} />
        <Route path="/details/:vacanzaID" element={<PackageDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
