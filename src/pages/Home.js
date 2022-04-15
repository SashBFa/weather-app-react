import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import City from "../components/City";
import { motion } from "framer-motion";

const Home = () => {
  const search = useSelector((state) => state.searchReducer);
  const weather = useSelector((state) => state.apiWeatherReducer);
  const [empty, setEmpty] = useState("");
  useEffect(() => {
    setEmpty(weather);
  }, [weather]);
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
    },
    out: {
      opacity: 0,
      x: 200,
    },
  };
  const popTitle = {
    in: {
      opacity: 1,
      y: 0,
    },
    out: {
      opacity: 0,
      y: -200,
    },
  };
  return (
    <div className="home">
      {empty && <Navigation />}
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransition}
        transition={{ duration: 0.4 }}
      >
        <motion.h1
          initial="out"
          animate="in"
          exit="out"
          variants={popTitle}
          transition={{ duration: 0.6 }}
        >
          Weather React App
        </motion.h1>
        <div className="home__box">
          <Search />
          {empty && <City city={search} weather={weather} />}
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
