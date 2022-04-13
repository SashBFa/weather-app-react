import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CurrentCard from "./CurrentCard";

const Receipt = () => {
  const [current, setCurrent] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=Liege&units=metric&appid=${process.env.REACT_APP_KEY}`
      )
      .then((element) => setCurrent(element.data));
  }, []);
  return (
    <div>{current && <CurrentCard key={uuidv4()} weather={current} />}</div>
  );
};

export default Receipt;
