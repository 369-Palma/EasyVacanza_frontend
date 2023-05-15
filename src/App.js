import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocalState } from "./util/UseLocalStorage";
import CustomNavbar from "./components/CustomNavbar";
import HomePage from "./components/HomePage";
import TuttiViaggi from "./components/TuttiViaggi";
import PackageDetails from "./components/PackageDetails";
import GalleriaEventi from "./components/GalleriaEventi";
import RegistrationPage from "./components/RegistrationPage";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [jwt, setJwt] = useLocalState("", "jwt");

  useEffect(() => {
    console.log(`JWT is: ${jwt}`);
  }, [jwt]);

  return (
    <BrowserRouter>
      <CustomNavbar className="mynavbar" claim="Were dreams come true!" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/offerte" element={<TuttiViaggi />} />
        <Route path="/eventi" element={<GalleriaEventi />} />
        <Route path="/details/:vacanzaId" element={<PackageDetails />} />
        <Route path="/login" element={<RegistrationPage />} />
        <Route
          path="/dshboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
