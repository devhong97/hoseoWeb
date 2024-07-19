import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Vision = () => {
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
              {"> "}융합원 소개{" > "}비전 및 목표
            </div>
            <div className="banner_main_text">비전 및 목표</div>
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
              <div className="navi_main_text">비전 및 목표</div>
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
                <div className="title_text">
                  충남산학융합원 비전/자세/경영방침
                </div>
              </div>
              {/* <div className='vision_contents_box top'>
                                <div className='first_box left'>
                                    <div className='left_box'>
                                        <div className='vision_row first'>
                                            비전
                                        </div>
                                        <div className='vision_row second'>
                                            자세
                                        </div>
                                    </div>
                                    <div className='right_box'>
                                        <div className='vision_row first visible'>
                                            비전
                                        </div>
                                        <div className='vision_row long'>
                                            고객과 나의 행복은 충남산학융합원으로부터
                                        </div>
                                        <div className='vision_row second visible'>
                                            자세
                                        </div>
                                        <div className='vision_row long'>
                                            <span>Basic</span>
                                            열정으로 문제를 인식하고
                                        </div>
                                        <div className='vision_row'>
                                            <span>Principle</span>
                                            창의적으로 대안을 생각하며
                                        </div>
                                        <div className='vision_row'>
                                            <span>Best Do</span>
                                            끈기와 협력으로 문제를 해결한다
                                        </div>
                                    </div>
                                </div>
                                <div className='first_box right'>
                                    <div className='left_box'>
                                        <div className='vision_row third'>
                                            경영지침
                                        </div>
                                    </div>
                                    <div className='right_box'>
                                        <div className='vision_row third visible'>
                                            경영지침
                                        </div>
                                        <div className='vision_row long'>
                                            신뢰와 협력
                                        </div>
                                        <div className='vision_row'>
                                            열정과 도전
                                        </div>
                                        <div className='vision_row'>
                                            창의적 미래선도
                                        </div>
                                    </div>
                                </div>
                            </div> */}
              <div className="founded_img_box vision">
                <div className="founded_img seventh"></div>
              </div>
            </div>
            <div className="vision_container">
              <div className="vision_title_box">
                <div className="logo_box">
                  <div className="logo_img"></div>
                </div>
                <div className="title_text">산학협력 발전계획 비전과 목표</div>
              </div>
              {/* <div className='vision_contents_box center'>
                                <div className='first_box w100'>
                                    <div className='left_box'>
                                        <div className='vision_row first'>
                                            비전
                                        </div>
                                        <div className='vision_row fourth'>
                                            비전
                                        </div>
                                    </div>
                                    <div className='right_box'>
                                        <div className='vision_row first visible'>
                                            비전
                                        </div>
                                        <div className='vision_row long'>
                                            지역 밀착형 인적자원 기반 조성
                                        </div>
                                        <div className='vision_row fourth visible'>
                                            비전
                                        </div>
                                        <div className='vision_row long'>
                                            지역 밀착형 인적자원 기반 조성
                                        </div>

                                    </div>
                                </div>
                                <div className='middle_arrow'></div>
                                <div className='second_box'>
                                    <div className='top_box'>
                                        <div className='vision_row first'>
                                            추천전략
                                        </div>
                                    </div>
                                    <div className='middle_box'>
                                        <div className='vision_row_box'>
                                            <div className='vision_row second'>
                                                인재개발실
                                            </div>
                                            <div className='vision_row bottom'>
                                            </div>
                                        </div>
                                        <div className='vision_row_box'>
                                            <div className='vision_row second'>
                                                인재개발실
                                            </div>
                                            <div className='vision_row bottom'>
                                            </div>
                                        </div>
                                        <div className='vision_row_box'>
                                            <div className='vision_row second'>
                                                인재개발실
                                            </div>
                                            <div className='vision_row bottom'>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
              <div className="founded_img_box vision">
                <div className="founded_img eighth"></div>
              </div>
            </div>
            <div className="vision_container">
              <div className="vision_title_box">
                <div className="logo_box">
                  <div className="logo_img"></div>
                </div>
                <div className="title_text">중장기 추진 계획</div>
              </div>
              <div className="founded_img_box vision">
                <div className="founded_img nineth"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
