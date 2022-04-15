import React from "react";
import Navigation from "../components/Navigation";
import Receipt from "../components/Receipt";

const Previsions = () => {
  const days = [8, 16, 24, 32];
  return (
    <div>
      <Navigation />
      <h1>Weather React App</h1>
      <Receipt thatDay={days} />
    </div>
  );
};

export default Previsions;
