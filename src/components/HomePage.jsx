import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import GalleriaOfferte from "./GalleriaOfferte";

const HomePage = () => {
  const urlAll = "http://localhost:8086/api/vacanze/pageable?page=0&size=5";

  const [data, setData] = useState([]);

  axios.get(urlAll).then((response) => {
    setData(response.data);
    console.log(response.data);
    console.log(data);
  });

  return (
    <>
      <Container>
        <h1> Lasciati ispirare dalle nostre offerte speciali!</h1>
        <GalleriaOfferte />
      </Container>
    </>
  );
};

export default HomePage;
