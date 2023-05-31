import "../styles/singleCard.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
import SingleCard from "./SingleCard";

const Carosello = ({ data }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="offerta" activeIndex={index} onSelect={handleSelect}>
      {data?.map((item) => (
        <Carousel.Item key={item.id}>
          <SingleCard data={item} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carosello;
