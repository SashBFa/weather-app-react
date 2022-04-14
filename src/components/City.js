import axios from "axios";
import React, { useEffect, useState } from "react";

const City = (props) => {
  const [cityImg, setCityImg] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${props.city}&client_id=${process.env.REACT_APP_KEY2}`
      )
      .then((img) => setCityImg(img.data.results[0].urls.regular));
  }, [props]);

  return (
    <div
      className="cityzen"
      style={{ background: `url(${cityImg}) center/cover` }}
    >
      {cityImg && <h2>{props.weather.city.name}</h2>}
    </div>
  );
};

export default City;
