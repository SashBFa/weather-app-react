import React, { useRef } from "react";

const Search = () => {
  const search = useRef();
  const searching = (e) => {
    e.preventDefault();
    console.log(search.current.value);
  };
  return (
    <div className="formContainer">
      <form onSubmit={searching}>
        <input
          type="text"
          name="search"
          ref={search}
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
