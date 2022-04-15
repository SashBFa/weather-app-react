import React from "react";
import Graphic from "../components/Graphic";
import Navigation from "../components/Navigation";
import Receipt from "../components/Receipt";

const Today = () => {
  const days = [0];
  return (
    <div>
      <Navigation />
      <Receipt thatDay={days} />
      <Graphic />
    </div>
  );
};

export default Today;
