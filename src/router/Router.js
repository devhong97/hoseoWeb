import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "../component/Home/Home";
import Login from "../component/Login/Login";
import Intro from "../component/Intro/Intro";
import History from "../component/Intro/History";
import Vision from "../component/Intro/Vision";
import Organization from "../component/SubBbs/Organization/Organization";
import OrganizationList from "../component/SubBbs/Organization/OrganizationList";
import Field from "../component/Intro/Field";
import Map from "../component/Intro/Map";
import BoardList from "../component/Board/BoardList";
import FloorList from "../component/SubBbs/Floor/FloorList";
import CompanyList from "../component/Board/CompanyList";
import IntroImage from "../component/Intro/IntroImage";
import BoardDetail from "./../component/Board/BoardDetail";
import BoardWrite from "./../component/Board/BoardWrite";
import OrganizationWrite from "./../component/SubBbs/Organization/OrganizationWrite";
import ImageList from "./../component/Board/ImageList";
import FacilityList from "../component/SubBbs/Facility/FacilityList";
import InquiryList from "../component/SubBbs/Inquiry/InquiryList";
import InquiryWrite from "../component/SubBbs/Inquiry/InquiryWrite";
import FacilityWrite from "../component/SubBbs/Facility/FacilityWrite";
import BoardModify from "../component/Board/BoardModify";
import InquiryDetail from "../component/SubBbs/Inquiry/InquiryDetail";
import FacilityDetail from "../component/SubBbs/Facility/FacilityDetail";
import InquiryModify from "../component/SubBbs/Inquiry/InquiryModify";
import FacilityModify from "../component/SubBbs/Facility/FacilityModify";

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
      <Route path="/board/:cate/modify" element={<BoardModify />} />
      {/* 아카이브 */}
      <Route path="/archive" element={<ImageList />} />
      {/* 입주기업현황 */}
      <Route path="/company" element={<CompanyList />}></Route>
      {/* 소개자료 */}
      <Route path="/introduce" element={<IntroImage />}></Route>

      {/* 서브BOARD - 입주문의, 조직도, 종료된사업, 시설예약 */}
      {/* 조직도 */}
      <Route path="/organization" element={<Organization />} />
      <Route path="/organization/:category" element={<OrganizationList />} />
      <Route
        path="/organization/:category/write"
        element={<OrganizationWrite />}
      />
      {/* 층별안내 */}
      <Route path="/floor" element={<FloorList />}></Route>
      {/* 입주문의 */}
      <Route path="/board/inquiry" element={<InquiryList />} />
      <Route path="/board/inquiry/:idx" element={<InquiryDetail />} />
      <Route path="/board/inquiry/write" element={<InquiryWrite />} />
      <Route path="/board/inquiry/modify" element={<InquiryModify />} />
      {/* 시설예약 */}
      <Route path="/board/facility" element={<FacilityList />} />
      <Route path="/board/facility/:idx" element={<FacilityDetail />} />
      <Route path="/board/facility/write" element={<FacilityWrite />} />
      <Route path="/board/facility/modify" element={<FacilityModify />} />
    </Routes>
  );
};

export default Router;
