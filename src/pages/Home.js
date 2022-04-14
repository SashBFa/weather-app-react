import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Search from "../components/Search";
import { useSelector } from "react-redux";
import City from "../components/City";

const Home = () => {
  const search = useSelector((state) => state.searchReducer);
  const weather = useSelector((state) => state.apiWeatherReducer);
  const [empty, setEmpty] = useState("");
  useEffect(() => {
    setEmpty(weather);
  }, [weather]);
  return (
    <div className="home">
      {empty && <Navigation />}
      <Search />
      {empty && <City city={search} weather={weather} />}
    </div>
  );
};

export default Home;
