import React from "react";
import Graphic from "../components/Graphic";
import Navigation from "../components/Navigation";
import Receipt from "../components/Receipt";
import { motion } from "framer-motion";

const Today = () => {
  const days = [0];
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
    <div className="today">
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
        <div className="today__box">
          <Receipt thatDay={days} />
          <Graphic />
        </div>
      </motion.div>
    </div>
  );
};

export default Today;
