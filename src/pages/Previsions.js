import React from "react";
import Navigation from "../components/Navigation";
import Receipt from "../components/Receipt";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const Previsions = () => {
  const days = [8, 16, 24, 32];
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
    <div>
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
        <Receipt thatDay={days} />
      </motion.div>
      <Footer />
    </div>
  );
};

export default Previsions;
