import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="navigation">
      <NavLink to={"/"} className={(nav) => (nav.isActive ? "nav-active" : "")}>
        <li>home</li>
      </NavLink>
      <NavLink
        to={"/today"}
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <li>today</li>
      </NavLink>
      <NavLink
        to={"/previsions"}
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <li>previsions</li>
      </NavLink>
      <NavLink
        to={"/compare"}
        className={(nav) => (nav.isActive ? "nav-active" : "")}
      >
        <li>compare</li>
      </NavLink>
    </ul>
  );
};

export default Navigation;
