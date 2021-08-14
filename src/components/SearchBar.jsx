import React, { useState } from "react";
import './Nav.css'

export default function SearchBar({onSearch, clearAll}) {
  const [city, setCity] = useState("");

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity(" ");
    }}>
      <input
        id="input"
        type="text"
        placeholder="Search a city"
        value={city}
        onChange={e => setCity(e.target.value)}
        autoComplete="off"
      />
      <input className="boton" type="submit" value="Add" />
      <button className="boton" id="btnn" type="reset" onClick={clearAll}>Clear</button>
    </form>
  );
}
