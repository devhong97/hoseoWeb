import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

const InquiryList = () => {
  const { decodeS1 } = useAuth();
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(0);
  const [tab, setTab] = useState(1);
  const [title, setTitle] = useState("");
  const [inquiryList, setInquiryList] = useState([]);
  const [totalPages, setTotalPages] = useState(0); // 총 페이지 수
  const navigate = useNavigate();
  const pageSize = 10; // 페이지당 항목 수
  const cate = "inquiry";

  useEffect(() => {
    axios
      .get(
        `http://localhost:3001/api/get/inquiry_list?cate=${cate}&page=${page}&pageSize=${pageSize}`
      )
      .then((response) => {
        setInquiryList(response.data.data);
        setTotalPages(response.data.totalPages);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [cate, page]);

  const hitCount = async (idx) => {
    try {
      await axios.post(
        `http://localhost:3001/api/post/board/inquiry/hit_count/${idx}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleRowClick = (idx) => {
    const selectedItem = inquiryList.find((item) => item.idx === idx);
    if (selectedItem) {
      hitCount(idx);
      navigate(`/board/${cate}/${idx}`, {
        state: { inquiryList: selectedItem },
      });
    }
  };

  const handleWrite = () => {
    navigate(`/board/${cate}/write`);
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

  const handleTab = (num) => {
    setTab(num);
  };
  const moveBoard = (cate) => {
    navigate(`/board/${cate}`, { state: { cate: cate } });
  };
  const movePage = (path) => {
    navigate(path);
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
    for (let i = 1; i <= totalPages; i++) {
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
                <div className="select_row">사업분야</div>
                <div className="select_row">인프라</div>
              </div>
            </div>
            <div className="navi_box" onClick={() => handleSelect(2)}>
              <div className="navi_main_text">입주문의</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div
                  className="select_row"
                  onClick={() => movePage("/company")}
                >
                  입주기업현황
                </div>
                <div className="select_row" onClick={() => movePage("/floor")}>
                  층별안내
                </div>
                <div className="select_row">입주안내</div>
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
              홈{">"}알림 및 소식{">"}
              입주문의
            </div>
            <div className="title_text">입주문의</div>
          </div>

          <div className="list_area">
            {decodeS1() === "admin" && (
              <div className="write_box">
                <div className="write_btn" onClick={handleWrite}>
                  입주문의 등록
                </div>
              </div>
            )}
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
                    <th className="head_section num">번호</th>
                    <th className="head_section title">제목</th>
                    <th className="head_section">작성자</th>
                    <th className="head_section date">연락처</th>
                    <th className="head_section date">조회수</th>
                  </tr>
                </thead>
                <tbody className="table_body">
                  {inquiryList.map((item, index) => {
                    const itemNumber = (page - 1) * pageSize + index + 1; // 실제 항목 번호 계산
                    return (
                      <tr
                        className="body_row"
                        key={index}
                        onClick={() => handleRowClick(item.idx)}
                      >
                        <td className="body_section num">{itemNumber}</td>
                        <td className="body_section title">{item.title}</td>
                        <td className="body_section date">{item.writer}</td>
                        <td className="body_section date">{item.date}</td>
                        <td className="body_section ">{item.hit}</td>
                      </tr>
                    );
                  })}
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

export default InquiryList;
