import React from "react";

const CurrentCard = ({ weather }) => {
  console.log(weather);
  const currentDate = () => {
    let newDate = new Date(weather.list[0].dt_txt);
    let date = newDate.getDate();
    let month = newDate.toLocaleString("default", { month: "long" });
    let day = newDate.toLocaleString("default", { weekday: "short" });
    return `${day}, ${date} ${month}`;
  };

  return (
    <div
      className="card"
      style={{
        background: `url(./assets/images/${weather.list[0].weather[0].main}.jpg)`,
      }}
    >
      <h2 className="card__date">{currentDate()}</h2>
      <h4 className="card__city">
        {weather.city.name}, {weather.city.country}
      </h4>
      <h3 className="card__desc">{weather.list[0].weather[0].description}</h3>
      <h4 className="card__temp">{weather.list[0].main.temp}°</h4>

      <p className="card__deg card__deg--min">
        min: {weather.list[0].main.temp_min}°
      </p>
      <p className="card__deg card__deg--max">
        max: {weather.list[0].main.temp_max}°
      </p>
      <p className="card__deg card__deg--max">
        feels: {weather.list[0].main.feels_like}°
      </p>
    </div>
  );
};

export default CurrentCard;
