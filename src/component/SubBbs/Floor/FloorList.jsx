import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FloorList = () => {
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(0);
  const [tab, setTab] = useState(1);
  const navigate = useNavigate();

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

  const handleTab = (num) => {
    setTab(num);
  };
  const moveBoard = (cate) => {
    navigate(`/board/${cate}`, { state: { cate: cate } });
  };
  const movePage = (path) => {
    navigate(path);
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
                <div
                  className="select_row"
                  onClick={() => movePage("/company")}
                >
                  기업연구동
                </div>
                <div className="select_row" onClick={() => movePage("/intro")}>
                  융합원소개
                </div>
                <div className="select_row" onClick={() => movePage("/empty")}>사업분야</div>
                <div className="select_row" onClick={() => movePage("/empty")}>인프라</div>
              </div>
            </div>
            <div className="navi_box" onClick={() => handleSelect(2)}>
              <div className="navi_main_text">층별안내</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div className="select_row" onClick={() => movePage("/empty")}>연구관 소개</div>
                <div
                  className="select_row"
                  onClick={() => movePage("/company")}
                >
                  입주기업현황
                </div>
                <div className="select_row" onClick={() => movePage("/floor")}>
                  층별안내
                </div>
                <div className="select_row" onClick={() => movePage("/empty")}>입주안내</div>
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
              <div className="home_icon"></div>{"> "}기업연구동{" > "}
              층별안내
            </div>
            <div className="title_text">층별안내</div>
            <div className="tab_area sixth">
              {[...Array(parseInt(6))].map((data, index) => {
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

          <div className="list_area">
            <div className="list_box">
              <table className="board_table">
                <thead className="table_head">
                  <tr className="head_row">
                    <th className="head_section num">번호</th>
                    <th className="head_section title">기업명</th>
                    <th className="head_section">대표자</th>
                    <th className="head_section date">연락처</th>
                    <th className="head_section date">홈페이지</th>
                  </tr>
                </thead>
                <tbody className="table_body">
                  {[...Array(parseInt(10))].map((data, index) => {
                    return (
                      <tr className="body_row">
                        <td className="body_section num">{index + 1}</td>
                        <td className="body_section title">에이솔루션</td>
                        <td className="body_section">고상우</td>
                        <td className="body_section date">010-1234-1234</td>
                        <td className="body_section date">www.naver.com</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="pagination_box">
              <div className="arrow_btn">{"<"}</div>
              {[...Array(parseInt(5))].map((data, index) => {
                return (
                  <div
                    className={`page_number ${page === index + 1 && "active"}`}
                    onClick={() => handlePage(index + 1)}
                  >
                    {index + 1}
                  </div>
                );
              })}

              <div className="arrow_btn">{">"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorList;
