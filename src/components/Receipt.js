import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CurrentCard from "./CurrentCard";

const Receipt = () => {
  const [current, setCurrent] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=Liege&units=metric&appid=fe380701dc6170c975b2fd9a06e01656"
      )
      .then((element) => setCurrent(element.data));
  }, []);
  return (
    <div>{current && <CurrentCard key={uuidv4()} weather={current} />}</div>
  );
};

export default Receipt;
