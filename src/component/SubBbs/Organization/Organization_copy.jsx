import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

const Organization = () => {
  const navigate = useNavigate();
  const { decodeS1 } = useAuth();
  const s1 = decodeS1();
  const [select, setSelect] = useState(0);

  const moveOrganizationPage = (category) => {
    navigate(`/organization/${category}`, { state: { category: s1 } });
  };

  const handleSelect = (num) => {
    if (select === num) {
      setSelect(0);
    } else {
      setSelect(num);
    }
  };
  const moveBoard = (cate) => {
    navigate(`/board/${cate}`, { state: { cate: cate } });
  };
  const movePage = (path) => {
    navigate(path);
  };
  return (
    <div className="sub_wrap">
      <div className="sub_back">
        <div className="sub_banner_area">
          <div className="sub_banner_back">
            <div className="navi_text">
              <div className="home_icon"></div>
              {"> "}융합원 소개{" > "}조직도
            </div>
            <div className="banner_main_text">조직도</div>
          </div>
        </div>
        <div className="navi_area">
          <div className="navi_back">
            <div className="navi_box" onClick={() => handleSelect(1)}>
              <div className="navi_main_text">융합원 소개</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 1 && "active"}`}>
                <div className="select_row" onClick={() => moveBoard("notice")}>
                  알림 및 소식
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/company")}
                >
                  기업연구동
                </div>
                <div className="select_row" onClick={() => movePage("/intro")}>
                  융합원소개
                </div>
                <div className="select_row" onClick={() => movePage("/empty")}>
                  사업분야
                </div>
                <div className="select_row" onClick={() => movePage("/empty")}>
                  보유시설
                </div>
              </div>
            </div>
            <div className="navi_box" onClick={() => handleSelect(2)}>
              <div className="navi_main_text">조직도</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div className="select_row" onClick={() => movePage("/intro")}>
                  인사말
                </div>
                <div className="select_row" onClick={() => movePage("/vision")}>
                  비전 및 목표
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/history")}
                >
                  연혁
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/organization")}
                >
                  조직도
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/introduce")}
                >
                  소개자료
                </div>
                <div className="select_row" onClick={() => movePage("/map")}>
                  오시는 길
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub_main_area education">
          <div className="sub_main_back">
            <div className="vision_container">
              <div className="vision_contents_box center">
                <div className="second_box">
                  <div className="top_box three short">
                    <div className="vision_row first">이사장</div>
                  </div>
                  <div className="top_box one short">
                    <div className="vision_row first one">감사</div>
                  </div>
                  <div className="top_box short">
                    <div className="vision_row first two">원장</div>
                  </div>
                  {/* <div className="middle_box education short">
                    <div className="vision_row_box">
                      <div className="vision_row second one">운영위원회</div>
                    </div>
                    <div className="vision_row_box">
                      <div className="vision_row second one">자문위원회</div>
                    </div>
                    <div className="vision_row_box">
                      <div className="vision_row second one">투심위원회</div>
                    </div>
                  </div> */}
                  <div className="top_box two long">
                    <div className="vision_row first three">사무국장</div>
                  </div>
                  <div className="middle_box education">
                    <div className="vision_row_box">
                      <div className="vision_row second">경영기획실</div>
                      <div className="vision_row bottom">
                        <div className="bottom_title">
                          행정지원팀 | 산학기획팀
                        </div>
                        <div className="bottom_text_row">
                          인사, 회계, 법인 행정
                        </div>
                        <div className="bottom_text_row">
                          대외 협력업무 및 홍보
                        </div>
                        <div className="bottom_text_row">기업연구동 관리</div>
                        <div className="bottom_text_row">신규사업 기획</div>
                        <div className="bottom_text_row">
                          국가혁신클러스터 (투자유치)
                        </div>
                        <div className="bottom_text_row">
                          탄소중립실증인프라구축사업
                        </div>
                        <div className="bottom_text_row">
                          충남산학융합형 인력양성사업
                        </div>
                        <div className="bottom_text_row">&nbsp;</div>
                        <div
                          className="detail_btn"
                          onClick={() => moveOrganizationPage("management")}
                        >
                          <div className="detail_text">직원 정보</div>
                          <div className="detail_arrow">{">"}</div>
                        </div>
                      </div>
                    </div>
                    <div className="vision_row_box">
                      <div className="vision_row second">기업지원실</div>
                      <div className="vision_row bottom">
                        <div className="bottom_title">
                          인재양성팀 | 기업지원팀
                        </div>
                        <div className="bottom_text_row">
                          지역산업맞춤형 인력양성사업
                        </div>
                        <div className="bottom_text_row">
                          국가혁신클러스터 (인재양성)
                        </div>
                        <div className="bottom_text_row">
                          에너지동반성장상생협력사업
                        </div>
                        <div className="bottom_text_row">
                          시순구연고산업육성사업
                        </div>
                        <div className="bottom_text_row">
                          지역주도형 청년일자리사업
                        </div>
                        <div className="bottom_text_row">
                          산학융합지구촉진사업
                        </div>
                        <div className="bottom_text_row">
                          청년일자리도약장려금사업
                        </div>
                        <div className="bottom_text_row">지역혁신프로젝트</div>
                        <div
                          className="detail_btn"
                          onClick={() => moveOrganizationPage("enterprise")}
                        >
                          <div className="detail_text">직원 정보</div>
                          <div className="detail_arrow">{">"}</div>
                        </div>
                      </div>
                    </div>
                    <div className="vision_row_box">
                      <div className="vision_row second">창업육성실</div>
                      <div className="vision_row bottom">
                        <div className="bottom_title">
                          미래기술팀 | 혁신창업팀
                        </div>
                        <div className="bottom_text_row">
                          중장년기술창업센터사업
                        </div>
                        <div className="bottom_text_row">
                          청년창업활성화지원사업
                        </div>
                        <div className="bottom_text_row">청년도전지원사업</div>
                        <div className="bottom_text_row">홍성군잇슈창고</div>
                        <div className="bottom_text_row">엑셀러레이터</div>
                        <div className="bottom_text_row">&nbsp;</div>
                        <div className="bottom_text_row">&nbsp;</div>
                        <div className="bottom_text_row">&nbsp;</div>
                        <div
                          className="detail_btn"
                          onClick={() => moveOrganizationPage("founded")}
                        >
                          <div className="detail_text">직원 정보</div>
                          <div className="detail_arrow">{">"}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organization;
