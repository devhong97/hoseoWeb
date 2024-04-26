import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../component/Home/Home";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default Router;
