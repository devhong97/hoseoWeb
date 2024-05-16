import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BoardList = () => {
  const location = useLocation();
  const { cate } = location.state || {};
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(0);
  const [tab, setTab] = useState(1);
  const [menuData, setMenuData] = useState([]); //

  console.log("menuData", menuData, cate);
  useEffect(() => {
    axios
      .get(`http://101.101.216.95:3001/api/get/board_list?cate=${cate}`)
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [cate]);

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
        case "reference":
          setTitle("자료실");
          break;
        default:
          return;
      }
    }
  }, [cate]);

  const handlePage = (num) => {
    setPage(num);
  };

  const handleTab = (num) => {
    setTab(num);
  };

  const handleRowClick = (idx) => {
    window.location.href = `/board/${cate}/${idx}`;
  };

  const handleWrite = () => {
    window.location.href = `/board/${cate}/write`;
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
                <div className="select_row">알림 및 소식</div>
              </div>
            </div>
            <div className="navi_box" onClick={() => handleSelect(2)}>
              <div className="navi_main_text">{title}</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div className="select_row">{title}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="board_container">
          <div className="title_box">
            <div className="navi_text">
              홈{">"}알림 및 소식{">"}
              {title}
            </div>
            <div className="title_text">{title}</div>
            {title === "자료실" && (
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
            )}
          </div>
          <div className="list_area">
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
                    <th className="head_section visiable">대상</th>
                    <th className="head_section title">교육명</th>
                    <th className="head_section date">접수일자</th>
                    <th className="head_section date">교육일자</th>
                    <th className="head_section state">상태</th>
                  </tr>
                </thead>
                <tbody className="table_body">
                  {menuData.map((item, index) => {
                    return (
                      <tr
                        className="body_row"
                        key={item.idx}
                        onClick={() => handleRowClick(item.idx)}
                      >
                        <td className="body_section num">{index + 1}</td>
                        <td className="body_section visiable">{item.target}</td>
                        <td className="body_section title">
                          {item.education_name}
                        </td>
                        <td className="body_section date">{item.date}</td>
                        <td className="body_section date">
                          {item.educationDate}
                        </td>
                        <td className="body_section state">
                          <div className="state_icon">
                            {item.status === 1 ? "접수중" : "접수마감"}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="write_box">
              <div className="write_btn" onClick={handleWrite}>
                {title} 등록
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

export default BoardList;
