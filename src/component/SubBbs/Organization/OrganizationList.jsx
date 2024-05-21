import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";

const OrganizationList = () => {
  const { category } = useParams();
  const [boardData, setBoardData] = useState([]);
  const [tab, setTab] = useState("management");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { decodeS1 } = useAuth();
  const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
  const pageSize = 10; // 페이지당 항목 수

  //교육 상세데이터
  const categoryDataSet = (category) => {
    axios
      .get(
        `http://localhost:3001/api/get/organization_list?category=${category}&page=${page}&pageSize=${pageSize}`
      )

      .then((response) => {
        setBoardData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    categoryDataSet(category);
  }, [category]);

  const infoWrite = () => {
    window.location.href = `/organization/${category}/write`;
  };

  const handleTab = (num) => {
    setTab(num);
    console.log("tab", tab);
    // categoryDataSet(category);
    // console.log("category", category);
    navigate(`/organization/${num}`);
  };
  const handlePage = (cate) => {
    setPage(cate);
  };

  const getCategoryName = (category) => {
    switch (category) {
      case "management":
        return "경영혁신실";
      case "enterprise":
        return "기업지원실";
      case "resources":
        return "인재개발실";
      case "founded":
        return "창업지원실";
      default:
        return "";
    }
  };

  //페이징처리
  const renderPagination = () => {
    const pages = [];
    // 이전버튼
    pages.push(
      <div key="prev" className="arrow_btn">
        <button
          className="page_button prev"
          onClick={() => handlePage(page > 1 ? page - 1 : 1)}
          disabled={page === 1}
        ></button>
      </div>
    );
    // 페이지수
    const totalPagesToShow = totalPages === 0 ? 1 : totalPages;
    for (let i = 1; i <= totalPagesToShow; i++) {
      pages.push(
        <button
          key={i}
          className={`page_number ${page === i ? "active" : ""}`}
          onClick={() => handlePage(i)}
        >
          {i}
        </button>
      );
    }
    // 다음버튼
    pages.push(
      <div key="next" className="arrow_btn">
        <button
          className="page_button"
          onClick={() => handlePage(page < totalPages ? page + 1 : totalPages)}
          disabled={page === totalPages}
        ></button>
      </div>
    );

    return pages;
  };

  // 각 카테고리별 테이블 내용
  return (
    <div className="board_wrap">
      <div className="board_back">
        <div className="board_container">
          <div className="title_box">
            <div className="navi_text">
              <div className="home_icon"></div>
              {"> "}알림 및 소식{" > "}직원정보
            </div>
            <div className="title_text">직원정보</div>
            <div className="tab_area fourth">
              <div
                className={`tab_box ${tab === "management" && "active"}`}
                onClick={() => handleTab("management")}
              >
                경영혁신실
              </div>
              <div
                className={`tab_box ${tab === "enterprise" && "active"}`}
                onClick={() => handleTab("enterprise")}
              >
                기업지원실
              </div>
              <div
                className={`tab_box ${tab === "resources" && "active"}`}
                onClick={() => handleTab("resources")}
              >
                인재개발실
              </div>
              <div
                className={`tab_box ${tab === "founded" && "active"}`}
                onClick={() => handleTab("founded")}
              >
                창업지원실
              </div>
            </div>
          </div>

          <div className="list_area">
            <div className="write_box">
              {decodeS1() === "admin" && (
                <div className="write_btn" onClick={infoWrite}>
                  {getCategoryName(category)} 직원정보 등록
                </div>
              )}
            </div>
            <div className="search_box">
              <input
                className="search_input"
                placeholder="검색어를 입력해주세요"
              ></input>
              <div className="search_btn"></div>
            </div>
            <div className="list_box">
              <table className="board_table">
                <thead className="table_head">
                  <tr className="head_row">
                    <th className="head_section ">이름</th>
                    <th className="head_section date">직위</th>
                    <th className="head_section title">업무</th>
                    <th className="head_section date">전화번호</th>
                    <th className="head_section date">이메일</th>
                  </tr>
                </thead>
                <tbody className="table_body">
                  {boardData.length === 0 ? (
                    <tr className="body_row">
                      <td
                        className="no_data"
                        colSpan="5"
                        style={{
                          height: "200px",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        데이터가 존재하지 않습니다.
                      </td>
                    </tr>
                  ) : (
                    boardData.map((data, index) => (
                      <tr className="body_row" key={index}>
                        <td className="body_section">{data.name}</td>
                        <td className="body_section date">{data.spot}</td>
                        <td className="body_section title">{data.work}</td>
                        <td className="body_section date">{data.tel}</td>
                        <td className="body_section">{data.email}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            <div className="pagination_box">{renderPagination()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationList;
