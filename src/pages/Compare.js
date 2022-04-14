import React from "react";
import Navigation from "../components/Navigation";
import Receipt from "../components/Receipt";

const Compare = () => {
  const days = [0];
  return (
    <div>
      <Navigation />
      <div className="formContainer">
        <form>
          <input
            type="text"
            name="search"
            className="formContainer__search"
            placeholder="Search.."
            required
            autoComplete="off"
          />
          <input
            className="formContainer__button"
            type="submit"
            required
            autoComplete="off"
          />
          <a href="#" className="formContainer__link">
            <i className="fa-solid fa-location-dot"></i> Use localisation
          </a>
        </form>
      </div>
      <Receipt thatDay={days} />
    </div>
  );
};

export default Compare;
