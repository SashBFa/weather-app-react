import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

const Receipt = (props) => {
  const search = useSelector((state) => state.apiWeatherReducer);

  return (
    <div>
      {search &&
        props.thatDay.map((nbr) => (
          <Card key={uuidv4()} weather={search} day={nbr} />
        ))}
      ;
    </div>
  );
};

export default Receipt;
