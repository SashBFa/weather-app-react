import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

const Receipt = (props) => {
  const [weather, setWeather] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Liege&units=metric&appid=${process.env.REACT_APP_KEY}`
      )
      .then((element) => setWeather(element.data));
  }, []);
  return (
    <div>
      {weather &&
        props.thatDay.map((nbr) => (
          <Card key={uuidv4()} weather={weather} day={nbr} />
        ))}
      ;
    </div>
  );
};

export default Receipt;
