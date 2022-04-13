import React from "react";
import Navigation from "../components/Navigation";
import Receipt from "../components/Receipt";

const Today = () => {
  const days = [0];
  return (
    <div>
      <Navigation />
      <Receipt thatDay={days} />
    </div>
  );
};

export default Today;
