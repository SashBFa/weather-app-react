import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CurrentCard from "./CurrentCard";

const Receipt = () => {
  const [current, setCurrent] = useState();
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/onecall?lat=50.62&lon=5.58&exclude=hourly,daily&appid=4a1e0b38ccc55facbfbf905ee9aa7f35"
      )
      .then((element) => setCurrent(element.data.current));
  }, []);
  // console.log(current);
  return (
    <div>
      <CurrentCard key={uuidv4()} weather={current} />
    </div>
  );
};

export default Receipt;
