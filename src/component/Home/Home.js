import React, { useEffect, useRef, useState } from "react";
import MainSwiper from "../swiper/MainSwiper";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Popup from "../Popup/Popup";

const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const containerRef4 = useRef(null);
  const [noticeList, setNoticeList] = useState([]);
  const [businessList, setBusinessList] = useState([]);
  const [educationList, setEcucationList] = useState([]);
  const [newsList, setNewsList] = useState([]);
  const topRef = useRef(null);
  const [searchText, setSearchText] = useState("");

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

  function formatDate(isoString) {
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 월은 0부터 시작하므로 +1 해준 후 두 자리로 맞춤
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  useEffect(() => {
    //공지사항
    const fetchNotice = async () => {
      try {
        const response = await axios.get(
          "https://ciuc.or.kr:8443/api/get/home/notice"
        );
        setNoticeList(response.data);
      } catch (err) {
        console.log("공지사항 호출 오류:", err);
      }
    };
    //사업공고
    const fetchBusiness = async () => {
      try {
        const response = await axios.get(
          "https://ciuc.or.kr:8443/api/get/home/business"
        );
        setBusinessList(response.data);
      } catch (err) {
        console.log("사업공고 호출 오류:", err);
      }
    };
    //교육공고
    const fetchEducation = async () => {
      try {
        const response = await axios.get(
          "https://ciuc.or.kr:8443/api/get/home/education"
        );
        setEcucationList(response.data);
      } catch (err) {
        console.log("교육공고 호출 오류:", err);
      }
    };

    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://ciuc.or.kr:8443/api/get/home/news"
        );
        setNewsList(response.data);
      } catch (err) {
        console.log("채용공고 호출 오류:", err);
      }
    };

    fetchNotice();
    fetchBusiness();
    fetchEducation();
    fetchNews();
  }, []);

  const hitCount = async (idx) => {
    try {
      await axios.post(
        `https://ciuc.or.kr:8443/api/post/board/hit_count/${idx}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const moveBoard = (cate) => {
    console.log("moveBoard 호출:", cate); // cate 값 확인
    navigate(`/board/${cate}`, { state: { cate: cate } });
  };

  const handleRowClick = (data) => {
    if (data.idx) {
      hitCount(data.idx);
      navigate(`/board/${data.category}/${data.idx}`, { state: { data } });
    } else {
      console.error("idx is undefined!");
    }
  };

  const handleImageBbsClick = async (data) => {
    console.log("datadata", data);
    console.log("idxidx", data.idx);
    if (data.idx) {
      await hitCount(data.idx); // hitCount 비동기 처리
      const path = `/board/${data.category}/${data.idx}`;
      console.log("Navigating to:", path);
      navigate(path, { state: { data } });
    } else {
      console.error("data.idx is undefined or falsy");
    }
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

  const handlerIntegratedSearch = () => {
    navigate("/integratedSearch", { state: { searchText: searchText } });
  };
  return (
    <div className="main_wrap">
      <Popup></Popup>
      <div className="main_back" ref={topRef}>
        {/* <div className="scroll_box">
          <div className="scroll_icon" onClick={() => scrollTop()}></div>
        </div> */}
        <div className="main_banner_box">
          {/* <div>
            <input
              style={{ border: "2px solid black", marginTop: "50px" }}
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div onClick={() => handlerIntegratedSearch()}>버튼</div>
          </div> */}
          <MainSwiper></MainSwiper>
        </div>
        <div className="home_menu_container">
          <div className="home_menu_box" ref={containerRef}>
            <div className="home_menu_row">
              <div
                className="home_menu_icon first"
                onClick={() => moveBoard("notice")}
              ></div>
            </div>
            <div className="home_menu_row">
              <div
                className="home_menu_icon second"
                onClick={() => moveBoard("business")}
              ></div>
            </div>
            <div className="home_menu_row">
              <div
                className="home_menu_icon third"
                onClick={() => moveBoard("education")}
              ></div>
            </div>
            <div className="home_menu_row">
              <div
                className="home_menu_icon fourth"
                onClick={() => moveBoard("bid")}
              ></div>
            </div>
            <div className="home_menu_row">
              <div
                className="home_menu_icon fifth"
                onClick={() => moveBoard("news")}
              ></div>
            </div>
            <div className="home_menu_row">
              <div
                className="home_menu_icon sixth"
                onClick={() => alert("준비중입니다.")}
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
                    {data.content
                      ? data.content
                          .replace(/<\/?[^>]+(>|$)/g, "") // HTML 태그 제거
                          .replace(/&nbsp;/g, " ") // &nbsp; 문자 대체
                          .replace(/&lt;/g, "<") // &lt; 문자 대체
                          .replace(/&gt;/g, ">") // &gt; 문자 대체
                          .replace(/&amp;/g, "&") // &amp; 문자 대체
                      : "No content available"}
                  </div>
                  <div className="contents_date">{formatDate(data.date)}</div>
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
                    {data.content
                      ? data.content
                          .replace(/<\/?[^>]+(>|$)/g, "") // HTML 태그 제거
                          .replace(/&nbsp;/g, " ") // &nbsp; 문자 대체
                          .replace(/&lt;/g, "<") // &lt; 문자 대체
                          .replace(/&gt;/g, ">") // &gt; 문자 대체
                          .replace(/&amp;/g, "&") // &amp; 문자 대체
                      : "No content available"}
                  </div>
                  <div className="contents_date">{formatDate(data.date)}</div>
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
              <div className="second_row" key={index}>
                <div
                  className="row_image"
                  style={{
                    backgroundImage: `url(https://ciuc.or.kr:8443/uploads/${
                      data.img1 ? data.img1 : "src/assets/image/no_image.png"
                    })`,
                    backgroundSize: data.img1 ? "" : "35% auto",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="row_bottom_box">
                  <div className="row_title">{data.title}</div>
                  <div className="row_text">
                    {data.content
                      ? data.content
                          .replace(/<\/?[^>]+(>|$)/g, "") // HTML 태그 제거
                          .replace(/&nbsp;/g, " ") // &nbsp; 문자 대체
                          .replace(/&lt;/g, "<") // &lt; 문자 대체
                          .replace(/&gt;/g, ">") // &gt; 문자 대체
                          .replace(/&amp;/g, "&") // &amp; 문자 대체
                      : "No content available"}
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
            <div className="banner_title">보도자료</div>
            <div className="banner_sub_text">
              충남산학융합원의 최근 소식을 알려드립니다.
            </div>
            <div className="more_btn" onClick={() => moveBoard("news")}>
              더보기 {">"}
            </div>
          </div>
        </div>
        <div className="first_container">
          <div className="first_back">
            <div className="last_rows news">
              <div className="row_top_box">
                <div className="row_title">보도자료</div>
                <div className="row_btn_box">
                  <div className="more_btn" onClick={() => moveBoard("news")}>
                    더보기 {">"}
                  </div>
                </div>
              </div>
              {newsList.map((data, index) => (
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
                    {data.content
                      ? data.content
                          .replace(/<\/?[^>]+(>|$)/g, "") // HTML 태그 제거
                          .replace(/&nbsp;/g, " ") // &nbsp; 문자 대체
                          .replace(/&lt;/g, "<") // &lt; 문자 대체
                          .replace(/&gt;/g, ">") // &gt; 문자 대체
                          .replace(/&amp;/g, "&") // &amp; 문자 대체
                      : "No content available"}
                  </div>
                  <div className="contents_date">{formatDate(data.date)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*
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
              <div className="second_row" key={index}>
                <div
                  className="row_image"
                  style={{
                    backgroundImage: `url(https://ciuc.or.kr:8443/uploads/${
                      data.img1 || "src/assets/image/no_image.png"
                    })`,
                    backgroundSize: "35% auto",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="row_bottom_box">
                  <div className="row_title">{data.title}</div>
                  <div className="row_text">
                    {data.content
                      ? data.content
                          .replace(/<\/?[^>]+(>|$)/g, "") // HTML 태그 제거
                          .replace(/&nbsp;/g, " ") // &nbsp; 문자 대체
                          .replace(/&lt;/g, "<") // &lt; 문자 대체
                          .replace(/&gt;/g, ">") // &gt; 문자 대체
                      : "No content available"}
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
          </div> */}
        {/* <div className="third_container">
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
          </div>*/}
      </div>
    </div>
  );
};

export default Home;
