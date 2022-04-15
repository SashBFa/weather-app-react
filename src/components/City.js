import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const City = (props) => {
  const [cityImg, setCityImg] = useState();
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${props.city}&client_id=${process.env.REACT_APP_KEY2}`
      )
      .then((img) => setCityImg(img.data.results[0].urls.regular))
      .catch((err) => setCityImg(""));
  }, [props]);
  const cardPop = {
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      scale: 0,
      x: -200,
    },
  };

  return (
    <motion.div
      className="cityzen"
      style={
        cityImg
          ? { background: `url(${cityImg}) center/cover` }
          : { background: `url(./assets/images/defaultCity.jpg) center/cover` }
      }
      initial="out"
      animate="in"
      exit="out"
      variants={cardPop}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial="out"
        animate="in"
        exit="out"
        variants={cardPop}
        transition={{ duration: 0.5 }}
      >
        {props.weather.city.name}
      </motion.h2>
    </motion.div>
  );
};

export default City;
