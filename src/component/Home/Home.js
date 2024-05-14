import React, { useEffect, useRef, useState } from "react";
import MainSwiper from "../swiper/MainSwiper";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const mouseWheelHandler = (e, containerRef) => {
    const delta = Math.max(-1, Math.min(1, e.deltaY || -e.detail));
    containerRef.current.scrollLeft += delta * 100; // 휠 방향 반대로 수정
    e.preventDefault();
  };
  useEffect(() => {
    const container1 = containerRef.current;
    const container2 = containerRef2.current;
    const container3 = containerRef3.current;
    const container4 = containerRef4.current;

    const addWheelListener = (container, ref) => {
      if (container) {
        container.addEventListener("wheel", (e) => mouseWheelHandler(e, ref));
        container.addEventListener("DOMMouseScroll", (e) =>
          mouseWheelHandler(e, ref)
        );
      }
    };

    addWheelListener(container1, containerRef);
    addWheelListener(container2, containerRef2);
    addWheelListener(container3, containerRef3);
    addWheelListener(container4, containerRef4);
    return () => {
      if (container1) {
        container1.removeEventListener("wheel", mouseWheelHandler);
        container1.removeEventListener("DOMMouseScroll", mouseWheelHandler);
      }
      if (container2) {
        container2.removeEventListener("wheel", mouseWheelHandler);
        container2.removeEventListener("DOMMouseScroll", mouseWheelHandler);
      }
      if (container3) {
        container3.removeEventListener("wheel", mouseWheelHandler);
        container3.removeEventListener("DOMMouseScroll", mouseWheelHandler);
      }
      if (container4) {
        container4.removeEventListener("wheel", mouseWheelHandler);
        container4.removeEventListener("DOMMouseScroll", mouseWheelHandler);
      }
    };
  }, []);
  return (
    <div className="main_wrap">
      <div className="main_back">
        <div className="scroll_box">
          <div className="scroll_icon"></div>
        </div>
        <div className="main_banner_box">
          <MainSwiper></MainSwiper>
        </div>
        <div className="home_menu_container">
          <div className="home_menu_box" ref={containerRef}>
            <div className="home_menu_row">
              <div className="home_menu_icon first" onClick={() => navigate("/intro")}></div>
            </div>
            <div className="home_menu_row">
              <div className="home_menu_icon second" onClick={() => navigate("/history")}></div>
            </div>
            <div className="home_menu_row">
              <div className="home_menu_icon third" onClick={() => navigate("/vision")}></div>
            </div>
            <div className="home_menu_row">
              <div className="home_menu_icon fourth" onClick={() => navigate("/field")}></div>
            </div>
            <div className="home_menu_row">
              <div className="home_menu_icon fifth" onClick={() => navigate("/map")}></div>
            </div>
            <div className="home_menu_row">
              <div className="home_menu_icon sixth"></div>
            </div>
          </div>
        </div>
        <div className="first_container">
          <div className="first_back">
            <div className="first_row">
              <div className="row_top_box">
                <div className="row_title">공지사항</div>
                <div className="row_btn_box">
                  <div className="more_btn">더보기 {">"}</div>
                </div>
              </div>
              {Array.from({ length: 3 }, (data, index) => (
                <div className="contents_row" key={index}>
                  <div className="contents_title">
                    2024년도 계약직 직원 채용 공고
                    <p className="new_btn">NEW</p>
                  </div>
                  <div className="contents_text">사단법인 충남 산학 융합원 공고 제 2024-17호 (사)충남산학융합원 계약직 직원 채용 공고..</div>
                  <div className="contents_date">2024.03.12</div>
                </div>
              ))}
            </div>
            <div className="first_row">
              <div className="row_top_box">
                <div className="row_title">사업공고</div>
                <div className="row_btn_box">
                  <div className="more_btn">더보기 {">"}</div>
                </div>
              </div>
              {Array.from({ length: 3 }, (data, index) => (
                <div className="contents_row" key={index}>
                  <div className="contents_title">
                    2024년도 계약직 직원 채용 공고
                    <p className="new_btn">NEW</p>
                  </div>
                  <div className="contents_text">
                    사단법인 충남 산학 융합원 공고 제 2024-17호 (사)충남산학융합원 계약직 직원 채용 공고
                    사단법인 충남 산학 융합원 공고 제 2024-17호 (사)충남산학융합원 계약직 직원 채용 공고
                  </div>
                  <div className="contents_date">2024.03.12</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="middle_banner_box">
          <div className="banner_text_box">
            <div className="banner_title">교육공고</div>
            <div className="banner_sub_text">교육생을 모집합니다.</div>
            <div className="more_btn">더보기 {">"}</div>
          </div>
        </div>
        <div className="second_container">
          <div className="second_back" ref={containerRef2}>
            {Array.from({ length: 4 }, (data, index) => (
              <div className="second_row">
                <div className="row_image"></div>
                <div className="row_bottom_box">
                  <div className="row_title">2024년도 “예비 CEO-100 양성” 교육</div>
                  <div className="row_text">지역에 경쟁력 있는 아이템 기획과 아 이디어를 보유한 예비 청년 창업가..</div>
                  <div className="more_btn">더보기 {">"}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="middle_banner_box second">
          <div className="banner_text_box">
            <div className="banner_title">채용공고</div>
            <div className="banner_sub_text">함께 일할 직원을 채용합니다.</div>
            <div className="more_btn">더보기 {">"}</div>
          </div>
        </div>
        <div className="second_container">
          <div className="second_back" ref={containerRef3}>
            {Array.from({ length: 4 }, (data, index) => (
              <div className="second_row">
                <div className="row_image"></div>
                <div className="row_bottom_box">
                  <div className="row_title">2024년도 “예비 CEO-100 양성” 교육</div>
                  <div className="row_text">지역에 경쟁력 있는 아이템 기획과 아 이디어를 보유한 예비 청년 창업가..</div>
                  <div className="more_btn">더보기 {">"}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="third_container">
          <div className="third_back">
            <div className="third_top_box">
              <div className="third_title">기업연구동 입주현황</div>
              <div className="more_btn">더보기 {">"}</div>
            </div>
            <div className="third_contents_box" ref={containerRef4}>
              {Array.from({ length: 4 }, (data, index) => (
                <div className="third_row">
                  <div className="title_box">(주) 공정</div>
                  <div className="contents_box">
                    <div className="contents_text">대표 : 정남용</div>
                    <div className="contents_text">업종 : 제조업</div>
                    <div className="contents_text">호실 : 403-07호</div>
                    <div className="contents_text">이메일 : asdfg@gmail.com</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
