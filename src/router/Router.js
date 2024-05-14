import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Intro from "../component/Intro/Intro";
import History from "../component/Intro/History";
import Vision from "../component/Intro/Vision";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      {/* 인사말 */}
      <Route path="/intro" element={<Intro />}></Route>
      {/* 연혁 */}
      <Route path="/history" element={<History />}></Route>
      {/* 비전 및 목표 */}
      <Route path="/vision" element={<Vision />}></Route>
    </Routes>
  );
};

export default Router;
