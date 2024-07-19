import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ArVr = () => {
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
              {"> "}보유시설{" > "}AR/VR
            </div>
            <div className="banner_main_text">AR/VR</div>
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
                  onClick={() => movePage("/formation")}
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
              <div className="navi_main_text">AR/VR</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div
                  className="select_row"
                  onClick={() => movePage("/meetingroom")}
                >
                  회의실
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/computer")}
                >
                  전산실습실
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/printing")}
                >
                  3D프린터
                </div>
                <div className="select_row" onClick={() => movePage("/arvr")}>
                  AR/VR
                </div>
                <div className="select_row" onClick={() => movePage("/cnc")}>
                  CNC/MCT
                </div>
                <div
                  className="select_row"
                  onClick={() => moveBoard("facility")}
                >
                  시설예약
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub_main_area founded empty">
          <div className="sub_main_back">
            <div className="vision_container">
              <div className="vision_title_box">
                <div className="logo_box">
                  <div className="logo_img"></div>
                </div>
                <div className="title_text">보유시설 - VR/AR</div>
              </div>
              <div className="lecture-room">
                <h2>203호 VR체험실습실</h2>
                <div className="image-container">
                  <div className="image vr-room-image1"></div>
                  <div className="image vr-room-image2"></div>
                </div>
                <p className="description">주요 시설: VR장비 2, 스크린</p>
                <p className="description">사용문의: 041-354-8558</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArVr;
