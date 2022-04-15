import React from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

const Receipt = (props) => {
  const search = useSelector((state) => state.apiWeatherReducer);
  const data = () => {
    if (props.compare) {
      return props.compare;
    } else {
      return search;
    }
  };

  return (
    <div className="receipt">
      {search &&
        props.thatDay.map((nbr) => (
          <Card key={uuidv4()} weather={data()} day={nbr} />
        ))}
      ;
    </div>
  );
};

export default Receipt;
