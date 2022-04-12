import React from "react";

const CurrentCard = ({ weather }) => {
  console.log(weather);
  return (
    <div
      className="card"
      style={{
        background: `url(./assets/images/${weather.list[0].weather[0].main}.jpg)`,
      }}
    >
      <h2>Current day</h2>
      <h3>{weather.list[0].weather[0].description}</h3>
      <h4>{weather.list[0].main.temp}°</h4>
      <p>min:{weather.list[0].main.temp_min}°</p>
      <p>max:{weather.list[0].main.temp_max}°</p>
      <p>feels:{weather.list[0].main.feels_like}°</p>
    </div>
  );
};

export default CurrentCard;
