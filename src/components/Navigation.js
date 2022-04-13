import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <ul className="navigation">
      <NavLink to={"/"}>
        <li>home</li>
      </NavLink>
      <NavLink to={"/today"}>
        <li>today</li>
      </NavLink>
      <NavLink to={"/previsions"}>
        <li>previsions</li>
      </NavLink>
      <NavLink to={"/compare"}>
        <li>compare</li>
      </NavLink>
    </ul>
  );
};

export default Navigation;
