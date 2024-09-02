import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import enterprise_img from "../../../../assets/image/koreanQuickStartProgram_img.jpg";

const KoreanQuickStartProgram = () => {
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
              {"> "}사업분야{" > "}인재 양성 사업
            </div>
            <div className="banner_main_text">인재 양성 사업</div>
          </div>
        </div>
        <div className="navi_area">
          <div className="navi_back">
            <div
              className="navi_box business_field"
              onClick={() => handleSelect(1)}
            >
              <div className="navi_main_text">인재양성사업</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 1 && "active"}`}>
                <div
                  className="select_row"
                  onClick={() => movePage("/fusionSupportProgram")}
                >
                  산학융합지구조성사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/chungnamInnovationProject")}
                >
                  기업지원사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/localIndustryTalentDevelopment")}
                >
                  인재양성사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/dangjinStartupSupport")}
                >
                  창업육성사업
                </div>
              </div>
            </div>
            <div className="navi_box human" onClick={() => handleSelect(2)}>
              <div className="navi_main_text">한국형 퀵스타트프로그램 사업</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div
                  className="select_row"
                  onClick={() => movePage("/localIndustryTalentDevelopment")}
                >
                  지역산업맞춤형 인력양성사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/koreanQuickStartProgram")}
                >
                  한국형 퀵스타트프로그램 사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/smeResearchTalentSupport")}
                >
                  중소기업 연구인력 현장맞춤형 양성지원사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/chungnamIndustryAcademiaProgram")}
                >
                  충남산학융합형 인력양성사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/youthVentureProgram")}
                >
                  청년도전지원사업
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub_main_area temporary">
          <div className="sub_main_back image_box">
            <div className="fusionSupportProgram">
              <div className="koreanQuickStartProgram_img"></div>
              {/* <img src={enterprise_img}></img> */}
            </div>
            {/* <div className="vision_container">
              <div className="vision_title_box">
                <div className="logo_box">
                  <div className="logo_img"></div>
                </div>
                <div className="title_text">
                  충남산학융합원 기업지원 프로젝트
                </div>
              </div>
              <div className="founded_img_box human">
                <div className="founded_img human"></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KoreanQuickStartProgram;
