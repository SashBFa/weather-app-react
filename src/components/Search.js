import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addWeather } from "../redux/actions/apiWeather.action";
import { addSearch } from "../redux/actions/search.action";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searching = (e) => {
    e.preventDefault();
    dispatch(addSearch(search));
    dispatch(addWeather(search));
    setSearch("");
  };
  return (
    <div className="formContainer">
      <h2 className="formContainer__title">Choose a city</h2>
      <form onSubmit={(e) => searching(e)}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
        <a
          href="*"
          onClick={(e) => alert("Work in progress!")}
          className="formContainer__link"
        >
          <i className="fa-solid fa-location-dot"></i> Use localisation
        </a>
      </form>
    </div>
  );
};

export default Search;
