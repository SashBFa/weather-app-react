import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Navigation from "../components/Navigation";
import Receipt from "../components/Receipt";

const Compare = () => {
  const days = [0];
  const [town, setTown] = useState("");
  const [weat, setWeat] = useState();
  const compare = (e) => {
    e.preventDefault();
    weath();
  };
  const weath = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${town}&units=metric&appid=${process.env.REACT_APP_KEY}`
      )
      .then((element) => setWeat(element.data))
      .catch((err) => alert("Sorry ! We did find this city"));
  };

  return (
    <div className="compare">
      <Navigation />
      <h1>Weather React App</h1>
      <div className="formContainer">
        <h2 className="formContainer__title">City to compare</h2>
        <form onSubmit={(e) => compare(e)}>
          <input
            type="text"
            name="search"
            className="formContainer__search"
            placeholder="Search.."
            value={town}
            onChange={(e) => setTown(e.target.value)}
            required
            autoComplete="off"
          />
          <input
            className="formContainer__button"
            type="submit"
            required
            autoComplete="off"
          />
          <a href="#" className="formContainer__link">
            <i className="fa-solid fa-location-dot"></i> Use localisation
          </a>
        </form>
      </div>
      <div className="compare__box">
        <Receipt thatDay={days} />
        {weat && <Receipt thatDay={days} compare={weat} />}
      </div>
    </div>
  );
};

export default Compare;
