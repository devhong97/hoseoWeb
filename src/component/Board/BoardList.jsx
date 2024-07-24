import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const BoardList = () => {
  const location = useLocation();
  const { cate } = location.state || {};
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(0);
  const [tab, setTab] = useState(1);
  const [menuData, setMenuData] = useState([]);
  const [allData, setAllData] = useState("");
  const navigate = useNavigate();
  const { decodeS1 } = useAuth();
  const pageSize = 10; // 페이지당 항목 수
  const [searchTerm, setSearchTerm] = useState(""); //검색어
  const [searchOption, setSearchOption] = useState("제목"); //검색조건(초기값:메뉴)
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

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

  console.log(menuData);
  useEffect(() => {
    getBoard();
  }, [cate, page]);

  const getBoard = () => {
    axios
      .get(
        `http://localhost:3001/api/get/board_list?cate=${cate}&page=${page}&pageSize=${pageSize}`
      )
      .then((response) => {
        const formattedData = response.data.data.map((item) => ({
          ...item,
          date: formatDate(item.date),
        }));
        setMenuData(formattedData);
        setAllData(response.data.totalCount);
        setTotalPages(response.data.totalPages);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSelect = (num) => {
    if (select === num) {
      setSelect(0);
    } else {
      setSelect(num);
    }
  };

  useEffect(() => {
    if (cate !== "") {
      switch (cate) {
        case "notice":
          setTitle("공지사항");
          break;
        case "business":
          setTitle("사업공고");
          break;
        case "education":
          setTitle("교육공고");
          break;
        case "employment":
          setTitle("채용공고");
          break;
        case "bid":
          setTitle("입찰공고");
          break;
        case "news":
          setTitle("보도자료");
          break;
        case "reference":
          setTitle("자료실");
          break;
        case "archive":
          setTitle("융합원 아카이브");
          break;
        default:
          return;
      }
    }
  }, [cate]);

  /**************************************************************/
  // 검색
  /**************************************************************/
  const handleSearch = useCallback(async () => {
    try {
      const url = `http://localhost:3001/api/get/board_search?page=${currentPage}&searchTerm=${searchTerm}&searchOption=${searchOption}&pageSize=${pageSize}&category=${cate}`;
      console.log(url);
      const res = await axios.get(url);
      const { totalItems, results } = res.data;

      const searchTotal = Math.ceil(totalItems / pageSize);

      setTotalPages(searchTotal);
      setMenuData(results);
      setCurrentPage(1);
    } catch (error) {
      console.error("검색 결과 가져오기 오류:", error);
    }
  }, [searchTerm, searchOption, currentPage, pageSize, cate]);
  /**************************************************************/
  // 검색어 초기화
  /**************************************************************/
  const handleReset = useCallback(() => {
    setSearchTerm(""); // 검색어 초기화
    setSearchOption("제목"); // 검색 옵션 초기화
    setCurrentPage(1); // 페이지 초기화
    // 리스트 다시 불러오기
    getBoard(); // 적절한 함수명으로 변경 필요
  }, []);

  const hitCount = async (idx) => {
    try {
      await axios.post(`http://localhost:3001/api/post/board/hit_count/${idx}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleRowClick = (idx) => {
    const selectedItem = menuData.find((item) => item.idx === idx);
    if (selectedItem) {
      hitCount(idx);
      navigate(`/board/${cate}/${idx}`, {
        state: { menuData: selectedItem, cate: cate },
      });
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

  const handleWrite = () => {
    navigate(`/board/${cate}/write`);
  };

  // renderPagination 함수 수정
  const renderPagination = () => {
    const pages = [];
    // 이전 버튼
    pages.push(
      <div key="prev" className="arrow_btn">
        <button
          className="page_button prev"
          onClick={() => handlePage(page > 1 ? page - 1 : 1)}
          disabled={page === 1}
        ></button>
      </div>
    );
    // 페이지 수 계산
    const totalPagesToShow = totalPages === 0 ? 1 : totalPages;
    const currentPageGroup = Math.ceil(page / 10); // 현재 페이지가 속한 그룹 계산
    const startPage = (currentPageGroup - 1) * 10 + 1; // 시작 페이지 계산
    const endPage = Math.min(startPage + 9, totalPagesToShow); // 끝 페이지 계산
    for (let i = startPage; i <= endPage; i++) {
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
    // 다음 버튼
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
              <div className="navi_main_text">알림 및 소식</div>
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
              <div className="navi_main_text">{title}</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div className="select_row" onClick={() => moveBoard("notice")}>
                  공지사항
                </div>
                <div
                  className="select_row"
                  onClick={() => moveBoard("business")}
                >
                  사업공고
                </div>
                <div
                  className="select_row"
                  onClick={() => moveBoard("education")}
                >
                  교육공고
                </div>
                <div
                  className="select_row"
                  onClick={() => moveBoard("employment")}
                >
                  채용공고
                </div>
                <div className="select_row" onClick={() => moveBoard("bid")}>
                  입찰공고
                </div>
                <div className="select_row" onClick={() => moveBoard("news")}>
                  보도자료
                </div>
                <div
                  className="select_row"
                  onClick={() => moveBoard("reference")}
                >
                  자료실
                </div>
                <div
                  className="select_row"
                  onClick={() => moveBoard("archive")}
                >
                  융합원 아카이브
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="board_container">
          <div className="title_box">
            <div className="navi_text">
              <div className="home_icon"></div>
              {"> "}알림 및 소식{" > "}
              {title}
            </div>
            <div className="title_text">{title}</div>
            {/* {title === "자료실" && (
              <div className="tab_area third">
                <div
                  className={`tab_box ${tab === 1 && "active"}`}
                  onClick={() => handleTab(1)}
                >
                  홍보자료
                </div>
                <div
                  className={`tab_box ${tab === 2 && "active"}`}
                  onClick={() => handleTab(2)}
                >
                  보도자료
                </div>
                <div
                  className={`tab_box ${tab === 3 && "active"}`}
                  onClick={() => handleTab(3)}
                >
                  기타
                </div>
              </div>
            )} */}
          </div>
          <div className="list_area">
            <div className="write_box">
              {decodeS1() === "admin" && (
                <div className="write_btn" onClick={handleWrite}>
                  {title} 등록
                </div>
              )}
            </div>
            <div className="search_box">
              <select
                value={searchOption}
                onChange={(e) => setSearchOption(e.target.value)}
              >
                <option>제목</option>
                <option>내용</option>
                <option>작성자</option>
              </select>
              <input
                className="search_input"
                placeholder="검색어를 입력하세요"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              ></input>
              <div className="option-box">
                <div className="search_btn" onClick={handleSearch}></div>
                <div className="reset-btn" onClick={handleReset}>
                  초기화
                </div>
              </div>
            </div>
            <div className="list_box">
              {window.innerWidth <= 768 ? (
                menuData.length > 0 ? (
                  menuData.map((item, index) => (
                    <div
                      className="board-mobile"
                      key={index}
                      onClick={() => handleRowClick(item.idx)}
                    >
                      <div className="mb-wrap">
                        <div className="mobile-sub">{item.title}</div>
                        <div className="mobile-btm">
                          <span>{item.writer}&nbsp;|&nbsp;</span>
                          <span>{item.date}&nbsp;|&nbsp;</span>
                          <span>조회수: {item.hit}</span>
                          {item.img1 === undefined &&
                          item.img === "" &&
                          item.img == null ? (
                            <span>X</span>
                          ) : (
                            <span className="clip_icon"></span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div>데이터가 존재하지 않습니다</div>
                )
              ) : (
                <table className="board_table">
                  <thead className="table_head">
                    <tr className="head_row">
                      <th className="head_section num">번호</th>
                      <th className="head_section title">제목</th>
                      <th className="head_section date">작성자</th>
                      <th className="head_section date">등록일</th>
                      <th className="head_section">조회수</th>
                    </tr>
                  </thead>
                  <tbody className="table_body">
                    {menuData.length === 0 ? (
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
                      menuData.map((item, index) => {
                        const itemNumber =
                          allData - ((page - 1) * pageSize + index); // 역순으로 계산된 번호
                        return (
                          <tr
                            className="body_row"
                            key={index} // key 값은 인덱스로 설정
                            onClick={() => handleRowClick(item.idx)}
                          >
                            <td className="body_section num">{itemNumber}</td>
                            <td className="body_section title">{item.title}</td>
                            <td className="body_section date">{item.writer}</td>
                            <td className="body_section date">
                              {formatDate(item.date)}
                            </td>
                            <td className="body_section">{item.hit}</td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              )}
            </div>
            <div className="pagination_box">{renderPagination()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
