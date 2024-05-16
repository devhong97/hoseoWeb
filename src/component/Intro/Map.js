import React, { useState } from "react";
import KakaoMap from "../KakaoMap/KakaoMap";

const Map = () => {
  const [select, setSelect] = useState(0);

  const handleSelect = (num) => {
    if (select === num) {
      setSelect(0);
    } else {
      setSelect(num);
    }
  };
  return (
    <div className="sub_wrap">
      <div className="sub_back">
        <div className="sub_banner_area">
          <div className="sub_banner_back">
            <div className="navi_text">
              홈{">"}알림 및 소식{">"}공지사항
            </div>
            <div className="banner_main_text">충남산학융합원 오시는길</div>
          </div>
        </div>
        <div className="navi_area">
          <div className="navi_back">
            <div className="navi_box" onClick={() => handleSelect(1)}>
              <div className="navi_main_text">알림 및 소식</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 1 && "active"}`}>
                <div className="select_row">알림 및 소식</div>
              </div>
            </div>
            <div className="navi_box" onClick={() => handleSelect(2)}>
              <div className="navi_main_text">공지사항</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div className="select_row">공지사항</div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub_main_area vision">
          <div className="sub_main_back">
            <div className="map_container">
              <div className="map_box">
                <KakaoMap></KakaoMap>
              </div>
              <div className="map_text_box">
                <div className="text_box left">
                  <div className="map_title">CONTACT US</div>
                  <div className="map_text_row">
                    <div className="map_text">
                      <span>TEL</span>041-354-8558
                    </div>
                    <div className="map_text">
                      <span>FAX</span>041-354-8558
                    </div>
                    <div className="map_text">
                      <span>E-MAIL</span>master@ciuc.or.kr
                    </div>
                  </div>
                </div>
                <div className="text_box right">
                  <div className="map_title">ADDRESS</div>
                  <div className="map_text_row">
                    <div className="map_text">
                      충남 당진시 석문면 산단7로 201
                    </div>
                    <div className="map_text">기업연구관 302호</div>
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

export default Map;
