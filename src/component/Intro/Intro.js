import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Intro = () => {
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
              {"> "}융합원 소개{" > "}인사말
            </div>
            <div className="banner_main_text">인사말</div>
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
              <div className="navi_main_text">인사말</div>
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
        <div className="sub_main_area intro">
          <div className="sub_main_back intro">
            <div className="intro_top_box">
              <div className="intro_box left">
                <div className="left_top_box">
                  <div className="logo_box">
                    <div className="intro_logo"></div>
                  </div>
                  <div className="intro_title">
                    서해안 시대를 준비하는 <br />
                    새로운 <span>산학융합의 중심</span>
                  </div>
                </div>
                <div className="left_bottom_box">
                  {/* <p className="color_box"></p>
                  <p className="color_box"></p>
                  <p className="color_box"></p> */}
                </div>
              </div>
              <div className="intro_box right">
                <div className="right_top_box">
                  <div className="image_box">
                    <div className="intro_image"></div>
                  </div>
                </div>
              </div>
              {/* <div className="intro_box right">
                <div className="blank_box"></div>
              </div> */}
            </div>
            <div className="intro_bottom_box">
              <div className="intro_main_text">
                안녕하십니까? <br />
                <span className="color-red">충남산학융합원 사이버 공간</span>의
                방문을 진심으로 환영합니다.
              </div>
              <div className="intro_sub_text_row">
                사단법인 <span className="color-blue">충남산학융합원</span>은
                도래하는 서해안 시대의 중심인 충남지역의 인적자원의 개발, 산-학
                R&D 협력, 일-학습병행 및 기업 맞춤형 교육 등 새로운 일자리
                창출과 기업의 혁신성장을 선도하는 기관입니다. 프로젝트의 수행,
                기업의 애로사항 및 기술적 문제점을 해결하기 위하여 융합원의
                전문연구원, 외부의 분야별 전문위원, 그리고 관내 대학의 교수들과
                함께 성공적으로 수행하고 있습니다. 또한, 기업의 부설연구소,
                창업기업들이 기업연구관에 입주하여 교수 및 전문가들의 도움을
                받으며 연구 및 사업화 활동을 가속적으로 수행하고 있습니다,
                충남산학융합원은 설립취지에 충실하게 업무를 수행함은 물론, 충남
                및 지역의 특화산업을 반영하고 미래형 사업모델을 발굴하여 기업의
                발전과 지역의 발전을 위하여 노력 할 것 입니다.
              </div>
              <div className="intro_sub_text_row">감사합니다.</div>
            </div>
            <br />
            <div className="intro_sign_box">
              <div className="sign_box left">
                <div className="sign_text_box">
                  사단법인 <span>충남산학융합원</span>
                </div>
                <div className="sign_text_box">
                  원장 <span>박상조</span>
                </div>
              </div>
              {/* <div className="sign_box right">
                <div className="sign_img"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
