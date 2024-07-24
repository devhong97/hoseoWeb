import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyList = () => {
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(0);
  const [companyData, setCompanyData] = useState([]);
  const navigate = useNavigate();
  const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
  const pageSize = 6; // 페이지당 항목 수 변경

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/get/company_list?page=${page}&pageSize=${pageSize}`
      )
      .then((response) => {
        setCompanyData(response.data.data);
        setTotalPages(response.data.totalPages);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [page]);

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
              <div className="navi_main_text">입주기업현황</div>
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
              입주기업현황
            </div>
            <div className="title_text">입주기업현황</div>
          </div>

          <div className="list_area">
            {/* <div className="search_box">
              <input
                className="search_input"
                placeholder="검색어를 입력해주세요"
              ></input>
              <div className="search_btn"></div>
            </div> */}
            <div className="list_box company">
              <div className="company_table">
                {companyData.map((company) => (
                  <div className="company_row" key={company.idx}>
                    <div className="title_box">{company.name}</div>
                    <div className="contents_box">
                      <div className="contents_text">
                        업종 : {company.sectors}
                      </div>
                      <div className="contents_text">호실 : {company.room}</div>
                      <div className="contents_text">
                        홈페이지 : {company.homepage}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pagination_box">
              <div className="arrow_btn">{"<"}</div>
              {[...Array(totalPages)].map((_, index) => (
                <div
                  key={index + 1}
                  className={`page_number ${page === index + 1 && "active"}`}
                  onClick={() => handlePage(index + 1)}
                >
                  {index + 1}
                </div>
              ))}
              <div className="arrow_btn">{">"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyList;
