import React from "react";
import Navigation from "../components/Navigation";
import Receipt from "../components/Receipt";

const Today = () => {
  return (
    <div>
      <Navigation />
      <h1>Today</h1>
      <Receipt />
    </div>
  );
};

export default Today;
