import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Intro from "../component/Intro/Intro";
import History from "../component/Intro/History";
import Vision from "../component/Intro/Vision";
import Education from "../component/Board/Education";
import EducationDetail from "../component/Board/EducationDetail";
import Field from "../component/Intro/Field";
import Map from "../component/Intro/Map";
import BoardList from "../component/Board/BoardList";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* 로그인 */}
      <Route path="/login" element={<Login />}></Route>
      {/* 인사말 */}
      <Route path="/intro" element={<Intro />}></Route>
      {/* 연혁 */}
      <Route path="/history" element={<History />}></Route>
      {/* 비전 및 목표 */}
      <Route path="/vision" element={<Vision />}></Route>
      {/* 사업분야 */}
      <Route path="/field" element={<Field />}></Route>
      {/* 오시는길 */}
      <Route path="/map" element={<Map />}></Route>
      {/* 게시판 */}
      <Route path="/board/:cate" element={<BoardList />}></Route>
      {/* 교육 */}
      <Route path="/education" element={<Education />} />
      <Route path="/education/:category" element={<EducationDetail />} />
    </Routes>
  );
};

export default Router;
