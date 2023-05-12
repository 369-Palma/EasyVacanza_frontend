//import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <CustomNavbar claim="Were dreams come true!" />
      <Home />
    </>
  );
}
export default App;
