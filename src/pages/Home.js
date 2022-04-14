import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Search from "../components/Search";
import { useSelector } from "react-redux";

const Home = () => {
  const search = useSelector((state) => state.searchReducer);
  const [empty, setEmpty] = useState("");
  useEffect(() => {
    setEmpty(search);
  }, []);
  console.log(search);
  return (
    <div className="home">
      {empty && <Navigation />}
      <Search />
    </div>
  );
};

export default Home;
