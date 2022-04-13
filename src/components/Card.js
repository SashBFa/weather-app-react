import React from "react";

const Card = (props) => {
  const theDate = () => {
    let newDate = new Date(props.weather.list[props.day].dt_txt);
    let date = newDate.getDate();
    let month = newDate.toLocaleString("default", { month: "short" });
    let day = newDate.toLocaleString("default", { weekday: "short" });
    return `${day}, ${date} ${month}`;
  };

  return (
    <div
      className="card"
      style={{
        background: `url(./assets/images/${props.weather.list[0].weather[0].main}.jpg) center/cover`,
      }}
    >
      <h2 className="card__date">{theDate()}</h2>
      <h4 className="card__city">
        {props.weather.city.name}, {props.weather.city.country}
      </h4>
      <h3 className="card__desc">
        {props.weather.list[props.day].weather[0].description}
      </h3>
      <h4 className="card__temp">
        {parseInt(props.weather.list[props.day].main.temp)}°
      </h4>

      <p className="card__deg card__deg--min">
        <em>min:</em>
        {parseInt(props.weather.list[0].main.temp_min)}°
      </p>
      <p className="card__deg card__deg--max">
        <em>max:</em> {parseInt(props.weather.list[props.day].main.temp_max)}°
      </p>
      <p className="card__deg card__deg--feel">
        <em>feels:</em>{" "}
        {parseInt(props.weather.list[props.day].main.feels_like)}°
      </p>
    </div>
  );
};

export default Card;
