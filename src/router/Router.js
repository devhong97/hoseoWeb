import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Intro from "../component/Intro/Intro";
import Education from "../component/Board/Education";
import EducationDetail from "../component/Board/EducationDetail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* 로그인 */}
      <Route path="/login" element={<Login />}></Route>
      {/* 인사말 */}
      <Route path="/intro" element={<Intro />}></Route>
      {/* 교육 */}
      <Route path="/education" element={<Education />} />
      <Route path="/education/:category" element={<EducationDetail />} />
    </Routes>
  );
};

export default Router;
