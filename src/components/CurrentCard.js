import React from "react";

const CurrentCard = ({ weather }) => {
  return (
    <div>
      <h2>Today</h2>
      <h3>{weather.weather[0].description}</h3>
    </div>
  );
};

export default CurrentCard;
