import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Context/AuthContext";

const FacilityList = () => {
  const { decodeS1 } = useAuth();
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(0);
  const [tab, setTab] = useState(1);
  const [title, setTitle] = useState("");
  const [facilityList, setFacilityList] = useState([]);

  const navigate = useNavigate();
  const pageSize = 10; // 페이지당 항목 수
  const cate = "facility";

  const [searchTerm, setSearchTerm] = useState(""); //검색어
  const [searchOption, setSearchOption] = useState("예약자"); //검색조건(초기값:메뉴)
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
  const [totalItems, setTotalItems] = useState(""); // 총  게시글 수

  useEffect(() => {
    getBoard();
  }, [page]);

  const getBoard = () => {
    axios
      .get(
        `https://ciuc.or.kr:8443/api/get/facility_reserve_list?&page=${page}&pageSize=${pageSize}`
      )
      .then((response) => {
        setFacilityList(response.data.data);
        setTotalPages(response.data.totalPages);
        setTotalItems(response.data.totalItems);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // const hitCount = async (idx) => {
  //   try {
  //     await axios.post(
  //       `https://ciuc.or.kr:8443/api/post/board/facility/hit_count/${idx}`
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleRowClick = (idx) => {
    // const selectedItem = facilityList.find((item) => item.idx === idx);
    // if (selectedItem) {
    //   hitCount(idx);
    //   navigate(`/board/${cate}/${idx}`, {
    //     state: { facilityList: selectedItem },
    //   });
    // }
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
      const url = `https://ciuc.or.kr:8443/api/get/facility_reserve_search?page=${currentPage}&searchTerm=${searchTerm}&searchOption=${searchOption}&pageSize=${pageSize}`;
      console.log(url);
      const res = await axios.get(url);
      const { totalItems, data } = res.data;
      const searchTotal = Math.ceil(totalItems / pageSize);
      setTotalPages(searchTotal);
      setFacilityList(data);
      setTotalItems(totalItems);
      setCurrentPage(1);
      setPage(1);
    } catch (error) {
      console.error("검색 결과 가져오기 오류:", error);
    }
  }, [searchTerm, searchOption, currentPage, pageSize]);
  /**************************************************************/
  // 검색어 초기화
  /**************************************************************/
  const handleReset = useCallback(() => {
    setSearchTerm(""); // 검색어 초기화
    setSearchOption("예약자"); // 검색 옵션 초기화
    setCurrentPage(1); // 페이지 초기화
    // 리스트 다시 불러오기
    getBoard(); // 적절한 함수명으로 변경 필요
  }, []);

  return (
    <div className="board_wrap">
      <div className="board_back">
        <div className="navi_area">
          <div className="navi_back">
            <div className="navi_box" onClick={() => handleSelect(1)}>
              <div className="navi_main_text">보유시설</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 1 && "active"}`}>
                <div className="select_row" onClick={() => moveBoard("notice")}>
                  알림 및 소식
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/fusionSupportProgram")}
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
              <div className="navi_main_text">시설예약</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div
                  className="select_row"
                  onClick={() => movePage("/meetingroom")}
                >
                  회의실
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/computer")}
                >
                  전산실습실
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/printing")}
                >
                  3D프린터
                </div>
                <div className="select_row" onClick={() => movePage("/arvr")}>
                  AR/VR
                </div>
                <div className="select_row" onClick={() => movePage("/cnc")}>
                  CNC/MCT
                </div>
                <div
                  className="select_row"
                  // onClick={() => moveBoard("facility")}
                  onClick={() =>
                    navigate("/board/facility/write", { state: { step: 1 } })
                  }
                >
                  시설예약
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="board_container">
          <div className="title_box">
            <div className="navi_text">
              <div className="home_icon"></div>
              {"> "}보유시설{" > "}
              시설예약
            </div>
            <div className="title_text">시설예약</div>
          </div>

          <div className="list_area">
            <div className="write_box">
              <div className="write_btn" onClick={handleWrite}>
                시설예약 등록
              </div>
            </div>
            <div className="search_box">
              <select
                value={searchOption}
                onChange={(e) => setSearchOption(e.target.value)}
              >
                <option>예약자</option>
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
            <div className="list_box">
              <table className="board_table">
                <thead className="table_head">
                  <tr className="head_row">
                    <th className="head_section num">번호</th>
                    <th className="head_section title">시설명</th>
                    <th className="head_section date">예약자</th>
                    <th className="head_section date2">등록일</th>
                  </tr>
                </thead>
                <tbody className="table_body">
                  {facilityList.length === 0 ? (
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
                    facilityList.map((item, index) => {
                      const itemNumber =
                        totalItems - ((page - 1) * pageSize + index); // 실제 항목 번호 계산
                      return (
                        <tr
                          className="body_row"
                          key={index}
                          onClick={() => handleRowClick(item.idx)}
                        >
                          <td className="body_section num">{itemNumber}</td>
                          <td className="body_section title">
                            {item.facility_code}
                          </td>
                          <td className="body_section date">
                            {item.reservation_name}
                          </td>
                          <td className="body_section date2">{item.date}</td>
                        </tr>
                      );
                    })
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

export default FacilityList;
