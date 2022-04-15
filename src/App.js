import { AnimatePresence } from "framer-motion";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Compare from "./pages/Compare";
import Home from "./pages/Home";
import Previsions from "./pages/Previsions";
import Today from "./pages/Today";

const App = () => {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/today" element={<Today />} />
          <Route path="/previsions" element={<Previsions />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
};

export default App;
