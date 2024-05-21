import React, { useEffect, useRef, useState } from "react";
import MainSwiper from "../swiper/MainSwiper";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const [noticeList, setNoticeList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  const [educationList, setEcucationList] = useState([]);
  const [employmentList, setEmploymentList] = useState([]);
  const topRef = useRef(null);

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

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get(
          "http://101.101.216.95:3001/api/get/home/notice"
        );
        setNoticeList(response.data);
      } catch (err) {
        console.log("공지사항 호출 오류:", err);
      }
    };

    const fetchBusiness = async () => {
      try {
        const response = await axios.get(
          "http://101.101.216.95:3001/api/get/home/business"
        );
        setBusinessList(response.data);
      } catch (err) {
        console.log("사업공고 호출 오류:", err);
      }
    };

    const fetchEducation = async () => {
      try {
        const response = await axios.get(
          "http://101.101.216.95:3001/api/get/home/education"
        );
        setEcucationList(response.data);
      } catch (err) {
        console.log("교육공고 호출 오류:", err);
      }
    };

    const fetchEmployment = async () => {
      try {
        const response = await axios.get(
          "http://101.101.216.95:3001/api/get/home/employment"
        );
        setEmploymentList(response.data);
      } catch (err) {
        console.log("채용공고 호출 오류:", err);
      }
    };

    fetchNotice();
    fetchBusiness();
    fetchEducation();
    fetchEmployment();
  }, []);

  const hitCount = async (idx) => {
    try {
      await axios.post(
        `http://101.101.216.95:3001/api/post/board/hit_count/${idx}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const moveBoard = (cate, idx) => {
    console.log("Move to:", cate, "with index:", idx); // 수정된 부분
    navigate(`/board/${cate}/${idx}`, { state: { cate: cate } });
  };

  const handleRowClick = (data) => {
    hitCount(data.idx);
    navigate(`/board/${data.category}/${data.idx}`, { state: { data } });
  };

  const handleImageBbsClick = (data) => {
    hitCount(data.idx);
    navigate(`/board/${data.category}/${data.idx}`, { state: { data } });
  };

  //날짜계산
  const isNew = (dateString) => {
    const today = new Date();
    const date = new Date(dateString);
    const diffTime = Math.abs(date - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7;
  };

  const scrollTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="main_wrap">
      <div className="main_back" ref={topRef}>
        <div className="scroll_box">
          <div className="scroll_icon" onClick={() => scrollTop()}></div>
        </div>
        <div className="main_banner_box">
          <MainSwiper></MainSwiper>
        </div>
        <div className="home_menu_container">
          <div className="home_menu_box" ref={containerRef}>
            <div className="home_menu_row">
              <div
                className="home_menu_icon first"
                onClick={() => navigate("/intro")}
              ></div>
            </div>
            <div className="home_menu_row">
              <div
                className="home_menu_icon second"
                onClick={() => navigate("/history")}
              ></div>
            </div>
            <div className="home_menu_row">
              <div
                className="home_menu_icon third"
                onClick={() => navigate("/vision")}
              ></div>
            </div>
            <div className="home_menu_row">
              <div
                className="home_menu_icon fourth"
                onClick={() => navigate("/field")}
              ></div>
            </div>
            <div className="home_menu_row">
              <div
                className="home_menu_icon fifth"
                onClick={() => navigate("/map")}
              ></div>
            </div>
            {/* 
            <div className="home_menu_row">
              <div className="home_menu_icon sixth"></div>
            </div>
            */}
          </div>
        </div>
        <div className="first_container">
          <div className="first_back">
            <div className="first_row">
              <div className="row_top_box">
                <div className="row_title">공지사항</div>
                <div className="row_btn_box">
                  <div className="more_btn" onClick={() => moveBoard("notice")}>
                    더보기 {">"}
                  </div>
                </div>
              </div>
              {noticeList.map((data, index) => (
                <div
                  className="contents_row"
                  key={index}
                  onClick={() => handleRowClick(data)}
                >
                  <div className="contents_title">
                    {data.title}
                    {isNew(data.date) && <p className="new_btn">NEW</p>}
                  </div>
                  <div className="contents_text">
                    {data.content.replace(/(<([^>]+)>)/gi, "")}
                  </div>
                  <div className="contents_date">{data.date}</div>
                </div>
              ))}
            </div>
            <div className="first_row">
              <div className="row_top_box">
                <div className="row_title">사업공고</div>
                <div className="row_btn_box">
                  <div
                    className="more_btn"
                    onClick={() => moveBoard("business")}
                  >
                    더보기 {">"}
                  </div>
                </div>
              </div>
              {businessList.map((data, index) => (
                <div
                  className="contents_row"
                  key={index}
                  onClick={() => handleRowClick(data)}
                >
                  <div className="contents_title">
                    {data.title}
                    {isNew(data.date) && <p className="new_btn">NEW</p>}
                  </div>
                  <div className="contents_text">
                    {data.content.replace(/(<([^>]+)>)/gi, "")}
                  </div>
                  <div className="contents_date">{data.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="middle_banner_box">
          <div className="banner_text_box">
            <div className="banner_title">교육공고</div>
            <div className="banner_sub_text">교육생을 모집합니다.</div>
            <div className="more_btn" onClick={() => moveBoard("education")}>
              더보기 {">"}
            </div>
          </div>
        </div>
        <div className="second_container">
          <div className="second_back" ref={containerRef2}>
            {educationList.map((data, index) => (
              <div className="second_row">
                <div
                  className="row_image"
                  style={{
                    backgroundImage: `url(http://101.101.216.95:3001/uploads/${data.img1})`,
                  }}
                ></div>
                <div className="row_bottom_box">
                  <div className="row_title">{data.title}</div>
                  <div className="row_text">
                    {data.content.replace(/(<([^>]+)>)/gi, "")}
                  </div>
                  <div
                    className="more_btn"
                    onClick={() => handleImageBbsClick(data)}
                  >
                    더보기 {">"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="middle_banner_box second">
          <div className="banner_text_box">
            <div className="banner_title">채용공고</div>
            <div className="banner_sub_text">함께 일할 직원을 채용합니다.</div>
            <div className="more_btn" onClick={() => moveBoard("employment")}>
              더보기 {">"}
            </div>
          </div>
        </div>
        <div className="second_container">
          <div className="second_back" ref={containerRef2}>
            {employmentList.map((data, index) => (
              <div className="second_row">
                <div
                  className="row_image"
                  style={{
                    backgroundImage: `url(http://101.101.216.95:3001/uploads/${data.img1})`,
                  }}
                ></div>
                <div className="row_bottom_box">
                  <div className="row_title">{data.title}</div>
                  <div className="row_text">
                    {data.content.replace(/(<([^>]+)>)/gi, "")}
                  </div>
                  <div
                    className="more_btn"
                    onClick={() => handleImageBbsClick(data)}
                  >
                    더보기 {">"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="third_container">
          <div className="third_back">
            <div className="third_top_box">
              <div className="third_title">기업연구동 입주현황</div>
              <div className="more_btn" onClick={() => navigate("/company")}>
                더보기 {">"}
              </div>
            </div>
            <div className="third_contents_box" ref={containerRef4}>
              {Array.from({ length: 4 }, (data, index) => (
                <div className="third_row">
                  <div className="title_box">(주) 공정</div>
                  <div className="contents_box">
                    <div className="contents_text">대표 : 정남용</div>
                    <div className="contents_text">업종 : 제조업</div>
                    <div className="contents_text">호실 : 403-07호</div>
                    <div className="contents_text">
                      이메일 : asdfg@gmail.com
                    </div>
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
