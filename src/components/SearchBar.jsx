import axios from "axios";
import React, { useState } from "react";

const SearchBar = () => {
  const url = "http://localhost:8086/api/attivita/partedescrizione/";

  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  const searchKeyword = (event) => {
    if (event.key === "Enter") {
      axios.get(url + keyword).then((response) => {
        setData(response.data);
        console.log(response.data);
        console.log(data);
      });
      setKeyword("");
    }
  };
  return (
    <>
      <input
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        placeholder="Cerca"
        onKeyPress={(event) => searchKeyword(event)}
        type="text"
      />
    </>
  );
};

export default SearchBar;
