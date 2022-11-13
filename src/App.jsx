import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./Details";
import Logo from "./Logo";
import Seafood from "./Seafood";

const App = () => {
  return (
    <div>
      <Logo />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Seafood />} />
          <Route path={`/seafood/:id`} element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// npm i react-router-dom
