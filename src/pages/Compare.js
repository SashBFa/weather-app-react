import axios from "axios";
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Receipt from "../components/Receipt";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Compare = () => {
  const days = [0];
  const [town, setTown] = useState("");
  const [weat, setWeat] = useState();
  const compare = (e) => {
    e.preventDefault();
    weath();
  };
  const weath = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${town}&units=metric&appid=${process.env.REACT_APP_KEY}`
      )
      .then((element) => setWeat(element.data))
      .catch((err) => alert("Sorry ! We did find this city"));
  };
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
    <div className="compare">
      <Navigation />
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
        <div className="formContainer">
          <h2 className="formContainer__title">City to compare</h2>
          <form onSubmit={(e) => compare(e)}>
            <input
              type="text"
              name="search"
              className="formContainer__search"
              placeholder="Search.."
              value={town}
              onChange={(e) => setTown(e.target.value)}
              required
              autoComplete="off"
            />
            <input
              className="formContainer__button"
              type="submit"
              required
              autoComplete="off"
            />
            <a href="*" className="formContainer__link">
              <i className="fa-solid fa-location-dot"></i> Use localisation
            </a>
          </form>
        </div>
        <div className="compare__box">
          <Receipt thatDay={days} />
          {weat && <Receipt thatDay={days} compare={weat} />}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Compare;
