import React, { useState } from "react";
import KakaoMap from "../KakaoMap/KakaoMap";
import { useNavigate } from "react-router-dom";
const Map = () => {
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
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
              <div className="home_icon_sub"></div>
              {"> "}융합원 소개{" > "}오시는 길
            </div>
            <div className="banner_main_text">오시는 길</div>
          </div>
        </div>
        <div className="navi_area">
          <div className="navi_back">
            <div className="navi_box" onClick={() => handleSelect(1)}>
              <div className="navi_main_text">융합원소개</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 1 && "active"}`}>
                <div className="select_row" onClick={() => moveBoard("notice")}>
                  알림 및 소식
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/fusionSupportProgram")}
                >
                  사업분야
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/inquiryinfo")}
                >
                  기업연구동
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/meetingroom")}
                >
                  보유시설
                </div>
                <div className="select_row" onClick={() => movePage("/intro")}>
                  융합원소개
                </div>
              </div>
            </div>
            <div className="navi_box" onClick={() => handleSelect(2)}>
              <div className="navi_main_text">오시는 길</div>
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
        <div className="sub_main_area vision">
          <div className="sub_main_back">
            <div className="vision_container">
              <div className="vision_title_box">
                <div className="logo_box">
                  <div className="logo_img"></div>
                </div>
                <div className="title_text">오시는 길</div>
              </div>
            </div>
            <br />
            <br />
            <div className="map_container">
              <div className="map_box">
                <KakaoMap></KakaoMap>
              </div>
              <div className="map_info_box">
                <div className="map_info_title">주소 및 연락처</div>
                <div className="map_info_content">
                  <dl>
                    <dt>주소</dt>
                    <dd>
                      충남 당진시 석문면 산단7로 201, 충남산학융합원 302호
                    </dd>
                  </dl>
                  <dl>
                    <dt>TEL</dt>
                    <dd>041-354-8558</dd>
                  </dl>
                  <dl>
                    <dt>FAX</dt>
                    <dd>041-354-8559</dd>
                  </dl>
                  <dl>
                    <dt>E-MAIL</dt>
                    <dd>master@ciuc.or.kr</dd>
                  </dl>
                </div>
              </div>
              <div className="traffic_box">
                <div className="traffic_title">교통 정보</div>
                <div className="traffic_content">
                  <dl>
                    <dt>대중교통 이용 안내</dt>
                    <dd>
                      <span>
                        <strong>시내버스 이용 안내</strong>
                        당진버스터미널 승차 → 호서대 하차 140, 142번
                      </span>
                      <span>
                        <strong>시외버스 이용 안내</strong>
                        당진버스터미널 하차
                      </span>
                    </dd>
                  </dl>
                  <dl>
                    <dt>자가용 이용 안내</dt>
                    <dd>
                      <span>
                        <strong>{"<면천IC>"}</strong>
                        면천IC교차로에서 ‘당진’ 방면으로 좌회전 →
                        당진1교교차로에서 ‘석문, 당진IC’ 방면으로 직진 → 통정2
                        교차로에서 ‘아산, 송악IC’ 방면으로 좌회전 →
                        ‘산학융합지구’ 방면으로 좌회전
                      </span>
                      <span>
                        <strong>{"<송악IC>"}</strong>
                        송악IC에서 ‘고대·부곡, 산업단지’ 방면 →
                        현대제철교차로에서 ‘대산, 석문‘방면으로 지하차도 진입 →
                        동 곡교차로에서 ’대산, 석문‘ 방면으로 왼쪽 지하차도 진입
                        → 가곡교차로에서 ‘대산, 석문’ 방면으로 왼쪽 지하차도
                        진입 → 통정1로 교차로에서 ‘석문방조제, 석문국가산업단지’
                        방면으로 오른쪽 방향 → 통정1 교차로에서 ‘산단3로’
                        방면으로 우회전 → ‘산학융합지구’ 방면으로 좌회전
                      </span>
                    </dd>
                  </dl>
                </div>
              </div>
              {/* <div className="map_text_box">
                <div className="text_box left">
                  <div className="map_title">문의</div>
                  <div className="map_text_row">
                    <div className="map_text">
                      <span>TEL</span>041-354-8558
                    </div>
                    <div className="map_text">
                      <span>FAX</span>041-354-8559
                    </div>
                    <div className="map_text">
                      <span>E-MAIL</span>master@ciuc.or.kr
                    </div>
                  </div>
                </div>
                <div className="text_box right">
                  <div className="map_title">주소</div>
                  <div className="map_text_row">
                    <div className="map_text">
                      충남 당진시 석문면 산단7로 201
                    </div>
                    <div className="map_text">충남산학융합원 302호</div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
