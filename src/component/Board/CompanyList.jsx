import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompanyList = () => {
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(0);
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
                <div className="select_row" onClick={() => moveBoard("notice")}>알림 및 소식</div>
                <div className="select_row" onClick={() => movePage("/company")}>기업연구동</div>
                <div className="select_row" onClick={() => movePage("/intro")}>융합원소개</div>
                <div className="select_row">사업분야</div>
                <div className="select_row">인프라</div>
              </div>
            </div>
            <div className="navi_box" onClick={() => handleSelect(2)}>
              <div className="navi_main_text">입주기업현황</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div className="select_row" onClick={() => movePage("/company")}>입주기업현황</div>
                <div className="select_row" onClick={() => movePage("/floor")}>층별안내</div>
                <div className="select_row" >입주안내</div>
                <div className="select_row" >입주문의</div>
              </div>
            </div>
          </div>
        </div>
        <div className="board_container">
          <div className="title_box">
            <div className="navi_text">
              홈{">"}알림 및 소식{">"}
              입주기업현황
            </div>
            <div className="title_text">입주기업현황</div>
          </div>

          <div className="list_area">
            <div className="search_box">
              <input
                className="search_input"
                placeholder="검색어를 입력해주세요"
              ></input>
              <div className="search_btn"></div>
            </div>
            <div className="list_box company">
              <div className="company_table">
                {[...Array(parseInt(6))].map((data, index) => {
                  return (
                    <div className="company_row">
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
                  );
                })}
              </div>
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

export default CompanyList;
