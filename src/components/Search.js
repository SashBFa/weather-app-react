import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSearch } from "../redux/actions/search.action";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const searching = (e) => {
    e.preventDefault();
    dispatch(addSearch(search));
    setSearch("");
  };
  return (
    <div className="formContainer">
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
        <a href="#" className="formContainer__link">
          <i className="fa-solid fa-location-dot"></i> Use localisation
        </a>
      </form>
    </div>
  );
};

export default Search;
