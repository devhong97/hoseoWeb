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
import InquiryInfo from "../component/SubBbs/Inquiry/InquiryInfo";
import DangjinStartupSupport from "../component/SubBbs/Business/Founded/DangjinStartupSupport";
import HopeReturnPackage from "../component/SubBbs/Business/Founded/HopeReturnPackage";
import HongseongIssueWarehouse from "../component/SubBbs/Business/Founded/HongseongIssueWarehouse";
import ChungnamInnovationProject from "../component/SubBbs/Business/Enterprise/ChungnamInnovationProject";
import ChungnamInnovationCluster from "../component/SubBbs/Business/Enterprise/ChungnamInnovationCluster";
import CarbonNeutralInfrastructure from "../component/SubBbs/Business/Enterprise/CarbonNeutralInfrastructure";
import LocalIndustryTalentDevelopment from "../component/SubBbs/Business/Human/LocalIndustryTalentDevelopment";
import KoreanQuickStartProgram from "../component/SubBbs/Business/Human/KoreanQuickStartProgram";
import SMEResearchTalentSupport from "../component/SubBbs/Business/Human/SMEResearchTalentSupport";
import ChungnamIndustryAcademiaProgram from "../component/SubBbs/Business/Human/ChungnamIndustryAcademiaProgram";
import YouthVentureProgram from "../component/SubBbs/Business/Human/YouthVentureProgram";
import FusionSupportProgram from "../component/SubBbs/Business/Formation/FusionSupportProgram";
import MeetingRoom from "../component/Empty/MeetingRoom";
import Computer from "../component/Empty/Computer";
import Printing from "../component/Empty/Printing";
import ArVr from "../component/Empty/ArVr";
import Cnc from "../component/Empty/Cnc";
import IntegratedSearch from "../component/IntegratedSearch/IntegratedSearch";
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
      {/* 오시는 길 */}
      <Route path="/map" element={<Map />}></Route>
      {/* 게시판 */}
      <Route path="/board/:cate" element={<BoardList />}></Route>
      <Route path="/board/:cate/:idx" element={<BoardDetail />} />
      <Route path="/board/:cate/write" element={<BoardWrite />} />
      <Route path="/board/:cate/modify" element={<BoardModify />} />
      {/* 아카이브 */}
      <Route path="/board/archive" element={<ImageList />} />
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
      {/* 입주안내 */}
      <Route path="/inquiryinfo" element={<InquiryInfo />} />
      {/* 시설예약 */}
      <Route path="/board/facility" element={<FacilityList />} />
      <Route path="/board/facility/:idx" element={<FacilityDetail />} />
      <Route path="/board/facility/write" element={<FacilityWrite />} />
      <Route path="/board/facility/modify" element={<FacilityModify />} />
      {/* 보유시설 */}
      <Route path="/meetingroom" element={<MeetingRoom />} />
      <Route path="/computer" element={<Computer />} />
      <Route path="/printing" element={<Printing />} />
      <Route path="/arvr" element={<ArVr />} />
      <Route path="/cnc" element={<Cnc />} />
      {/* 창업육성사업 */}
      <Route
        path="/dangjinStartupSupport"
        element={<DangjinStartupSupport />}
      ></Route>
      <Route path="/hopeReturnPackage" element={<HopeReturnPackage />}></Route>
      <Route
        path="/hongseongIssueWarehouse"
        element={<HongseongIssueWarehouse />}
      ></Route>
      {/* 기업지원사업 */}
      <Route
        path="/chungnamInnovationProject"
        element={<ChungnamInnovationProject />}
      ></Route>
      <Route
        path="/chungnamInnovationCluster"
        element={<ChungnamInnovationCluster />}
      ></Route>
      <Route
        path="/carbonNeutralInfrastructure"
        element={<CarbonNeutralInfrastructure />}
      ></Route>
      {/* 인재양성사업 */}
      <Route
        path="/localIndustryTalentDevelopment"
        element={<LocalIndustryTalentDevelopment />}
      ></Route>
      <Route
        path="/koreanQuickStartProgram"
        element={<KoreanQuickStartProgram />}
      ></Route>
      <Route
        path="/smeResearchTalentSupport"
        element={<SMEResearchTalentSupport />}
      ></Route>
      <Route
        path="/chungnamIndustryAcademiaProgram"
        element={<ChungnamIndustryAcademiaProgram />}
      ></Route>
      <Route
        path="/youthVentureProgram"
        element={<YouthVentureProgram />}
      ></Route>
      {/* 산학조성사업 */}
      <Route
        path="/fusionSupportProgram"
        element={<FusionSupportProgram />}
      ></Route>
      <Route path="/integratedSearch" element={<IntegratedSearch />}></Route>
    </Routes>
  );
};

export default Router;
