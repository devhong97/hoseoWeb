import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Intro from "../component/Intro/Intro";
import History from "../component/Intro/History";
import Vision from "../component/Intro/Vision";
import Education from "../component/Board/Education/Education";
import EducationList from "../component/Board/Education/EducationList";
import Field from "../component/Intro/Field";
import Map from "../component/Intro/Map";
import BoardList from "../component/Board/BoardList";
import FloorList from "../component/Board/Floor/FloorList";
import CompanyList from "../component/Board/CompanyList";
import IntroImage from "../component/Intro/IntroImage";
import BoardDetail from "./../component/Board/BoardDetail";
import BoardWrite from "./../component/Board/BoardWrite";

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
      <Route path="/board/:cate/:idx" element={<BoardDetail />} />
      <Route path="/board/:cate/write" element={<BoardWrite />} />
      {/* 층별안내 */}
      <Route path="/floor" element={<FloorList />}></Route>
      {/* 입주기업현황 */}
      <Route path="/company" element={<CompanyList />}></Route>
      {/* 소개자료 */}
      <Route path="/introduce" element={<IntroImage />}></Route>
      {/* 교육 */}
      <Route path="/education" element={<Education />} />
      <Route path="/education/:category" element={<EducationList />} />
    </Routes>
  );
};

export default Router;
