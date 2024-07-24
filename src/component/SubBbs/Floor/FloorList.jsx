import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FloorList = () => {
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(0);
  const [tab, setTab] = useState(1);
  const [floorList, setFloorList] = useState([]);
  const navigate = useNavigate();
  const [cate, setCate] = useState("floor");

  // 날짜 포맷 변환 함수
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    getBoard();
  }, []);

  const getBoard = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/api/get/floor_list?cate=${cate}&tab=${tab}`
      );
      setFloorList(response.data.data);
    } catch (error) {
      console.error("Error fetching floor list data", error);
    }
  };

  const handleSelect = (num) => {
    if (select === num) {
      setSelect(0);
    } else {
      setSelect(num);
    }
  };
  const handlePage = (num) => {
    setPage(num);
  };

  const handleTab = async (num) => {
    try {
      setTab(num);
      const response = await axios.get(
        `http://localhost:3001/api/get/floor_list?cate=${cate}&tab=${num}`
      );
      setFloorList(response.data.data);
    } catch (error) {
      console.error("Error fetching floor list data", error);
    }
  };

  const moveBoard = (cate) => {
    navigate(`/board/${cate}`, { state: { cate: cate } });
  };
  const movePage = (path) => {
    navigate(path);
  };
  const getImageClass = (tabNumber) => {
    return `inquiry_img_${tabNumber}`;
  };

  return (
    <div className="board_wrap">
      <div className="board_back">
        <div className="navi_area">
          <div className="navi_back">
            <div className="navi_box" onClick={() => handleSelect(1)}>
              <div className="navi_main_text">기업연구동</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 1 && "active"}`}>
                <div className="select_row" onClick={() => moveBoard("notice")}>
                  알림 및 소식
                </div>
                <div className="select_row" onClick={() => movePage("/empty")}>
                  사업분야
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/company")}
                >
                  기업연구동
                </div>
                <div className="select_row" onClick={() => movePage("/empty")}>
                  보유시설
                </div>
                <div className="select_row" onClick={() => movePage("/intro")}>
                  융합원소개
                </div>
              </div>
            </div>
            <div className="navi_box" onClick={() => handleSelect(2)}>
              <div className="navi_main_text">층별안내</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div
                  className="select_row"
                  onClick={() => movePage("/inquiryinfo")}
                >
                  입주안내
                </div>
                <div className="select_row" onClick={() => movePage("/floor")}>
                  층별안내
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/company")}
                >
                  입주기업현황
                </div>
                <div
                  className="select_row"
                  onClick={() => moveBoard("inquiry")}
                >
                  입주문의
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="board_container">
          <div className="title_box">
            <div className="navi_text">
              <div className="home_icon"></div>
              {"> "}기업연구동{" > "}
              층별안내
            </div>
            <div className="title_text">층별안내</div>
            <div className="tab_area sixth">
              {[...Array(parseInt(5))].map((data, index) => {
                return (
                  <div
                    className={`tab_box ${tab === index + 1 && "active"}`}
                    onClick={() => handleTab(index + 1)}
                  >
                    {index + 1}F
                  </div>
                );
              })}
            </div>
          </div>
          <div className="inquiry_list_area">
            <div className="inquiry_area">
              <div className="inquiry_img_box">
                <div className={`inquiry_img ${getImageClass(tab)}`}></div>
              </div>
            </div>

            <div className="list_area">
              <div className="list_box">
                <table className="board_table">
                  <thead className="table_head">
                    <tr className="head_row">
                      <th className="head_section num">번호</th>
                      <th className="head_section title">호실</th>
                      <th className="head_section">시설명</th>
                      <th className="head_section date">작성자</th>
                      <th className="head_section date">등록일</th>
                    </tr>
                  </thead>
                  <tbody className="table_body">
                    {floorList.map((item, index) => (
                      <tr className="body_row" key={index}>
                        <td className="body_section num">{index + 1}</td>
                        <td className="body_section date">{item.room}</td>
                        <td className="body_section">{item.room_name}</td>
                        <td className="body_section date">{item.writer}</td>
                        <td className="body_section date">{item.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorList;
