import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import enterprise_img from "../../../../assets/image/chungnamInnovationCluster_img.jpg";
const ChungnamInnovationCluster = () => {
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
              {"> "}사업분야{" > "}기업 지원 사업
            </div>
            <div className="banner_main_text">기업 지원 사업</div>
          </div>
        </div>
        <div className="navi_area">
          <div className="navi_back">
            <div
              className="navi_box business_field"
              onClick={() => handleSelect(1)}
            >
              <div className="navi_main_text">기업지원사업</div>
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
            <div
              className="navi_box enterprise"
              onClick={() => handleSelect(2)}
            >
              <div className="navi_main_text">충남지역혁신클러스터</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div
                  className="select_row"
                  onClick={() => movePage("/chungnamInnovationProject")}
                >
                  충남지역혁신프로젝트 사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/chungnamInnovationCluster")}
                >
                  충남지역혁신클러스터
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/carbonNeutralInfrastructure")}
                >
                  탄소중립실증인프라구축사업
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub_main_area temporary">
          <div className="sub_main_back image_box">
            <div className="fusionSupportProgram">
              <div className="chungnamInnovationCluster_img"></div>
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
              <div className="founded_img_box enterprise_one">
                <div className="founded_img enterprise_one"></div>
              </div>
              <div className="founded_img_box enterprise_two">
                <div className="founded_img enterprise_two"></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChungnamInnovationCluster;
