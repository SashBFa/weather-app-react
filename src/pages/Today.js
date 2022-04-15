import React from "react";
import Graphic from "../components/Graphic";
import Navigation from "../components/Navigation";
import Receipt from "../components/Receipt";

const Today = () => {
  const days = [0];
  return (
    <div className="today">
      <Navigation />
      <h1>Weather React App</h1>
      <div className="today__box">
        <Receipt thatDay={days} />
        <Graphic />
      </div>
    </div>
  );
};

export default Today;
