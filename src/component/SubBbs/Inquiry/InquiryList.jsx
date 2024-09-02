import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

const InquiryList = () => {
  const { decodeS1 } = useAuth();
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(0);
  const [tab, setTab] = useState(1);
  const [title, setTitle] = useState("");
  const [inquiryList, setInquiryList] = useState([]);

  const navigate = useNavigate();
  const pageSize = 10; // 페이지당 항목 수
  const cate = "inquiry";

  const [searchTerm, setSearchTerm] = useState(""); //검색어
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [searchOption, setSearchOption] = useState("연락처"); //검색조건
  const [totalPages, setTotalPages] = useState(1); // 총 페이지 수
  const [totalItems, setTotalItems] = useState(""); // 총  게시글 수

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // 화면 크기 변경을 감지하여 상태를 업데이트합니다.
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // 컴포넌트가 마운트될 때 리사이즈 이벤트 리스너를 추가합니다.
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 리스너를 제거합니다.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // 빈 배열을 의존성으로 설정하여 컴포넌트가 마운트될 때만 실행합니다.

  /**************************************************************/
  // 리스트 / 페이징처리
  /**************************************************************/
  useEffect(() => {
    getBoard();
  }, [cate, page]);

  //page - 현재 페이지, currentPage
  const getBoard = () => {
    axios
      .get("https://ciuc.or.kr:8443/api/get/inquiry_search", {
        params: {
          page,
          pageSize,
          category: cate, // cate 값을 파라미터에 추가
          searchTerm,
          searchOption,
        },
      })
      .then((res) => {
        const { totalItems, results } = res.data;
        setInquiryList(results);
        setTotalPages(Math.ceil(totalItems / pageSize));
        setTotalItems(totalItems);
      })
      .catch((error) => {
        console.error("리스트출력 오류", error);
      });
  };

  const hitCount = async (idx) => {
    try {
      await axios.post(
        `https://ciuc.or.kr:8443/api/post/board/inquiry/hit_count/${idx}`
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleRowClick = (idx) => {
    const selectedItem = inquiryList.find((item) => item.idx === idx);
    if (selectedItem) {
      hitCount(idx);
      navigate(`/board/${cate}/${idx}`);
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

  /**************************************************************/
  // 검색
  /**************************************************************/
  const handleSearch = useCallback(async () => {
    try {
      const url = `https://ciuc.or.kr:8443/api/get/inquiry_search?page=${currentPage}&searchTerm=${searchTerm}&searchOption=${searchOption}&pageSize=${pageSize}&category=${cate}`;
      const res = await axios.get(url);
      const { totalItems, results } = res.data;
      const searchTotal = Math.ceil(totalItems / pageSize);

      setTotalPages(searchTotal);
      setTotalItems(totalItems);
      setInquiryList(results);
      setCurrentPage(1);
      setPage(1);
    } catch (error) {
      console.error("검색 결과 가져오기 오류:", error);
    }
  }, [searchTerm, searchOption, currentPage, pageSize, cate]);

  /**************************************************************/
  // 검색어 초기화
  /**************************************************************/
  const handleReset = useCallback(() => {
    setSearchTerm(""); // 검색어 초기화
    setSearchOption("연락처"); // 검색 옵션 초기화
    setCurrentPage(1); // 페이지 초기화
    getBoard();
  }, []);
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
              <div className="navi_main_text">입주문의</div>
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
              입주문의
            </div>
            <div className="title_text">입주문의</div>
          </div>

          <div className="list_area">
            <div className="write_box">
              <div className="write_btn" onClick={handleWrite}>
                입주문의 등록
              </div>
            </div>
            <div className="search_box">
              <select
                value={searchOption}
                onChange={(e) => setSearchOption(e.target.value)}
              >
                <option>연락처</option>
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
            {/* <div className="search_box">
              <input
                className="search_input"
                placeholder="검색어를 입력해주세요"
              ></input>
              <div className="search_btn"></div>
            </div> */}
            <div className="list_box">
              {isMobile ? (
                inquiryList.length > 0 ? (
                  inquiryList.map((item, index) => (
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
                          {item.img1 == null ? (
                            ""
                          ) : (
                            <span className="clip_icon"></span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no_data_mobile">
                    데이터가 존재하지 않습니다
                  </div>
                )
              ) : (
                <table className="board_table">
                  <thead className="table_head">
                    <tr className="head_row">
                      <th className="head_section num">번호</th>
                      <th className="head_section title">제목</th>
                      <th className="head_section">첨부파일</th>
                      <th className="head_section date">작성일시</th>
                    </tr>
                  </thead>
                  <tbody className="table_body">
                    {inquiryList.length === 0 ? (
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
                      inquiryList.map((item, index) => {
                        const itemNumber =
                          totalItems - ((page - 1) * pageSize + index); // 실제 항목 번호 계산
                        return (
                          <tr
                            className="body_row"
                            key={index}
                            onClick={() => handleRowClick(item.idx)}
                          >
                            <td className="body_section num">{itemNumber}</td>
                            <td className="body_section title">{item.title}</td>
                            <td className="body_section file">
                              {item.img1 === null ? (
                                ""
                              ) : (
                                <div className="clip_icon"></div>
                              )}
                            </td>
                            <td className="body_section date">{item.date}</td>
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

export default InquiryList;
