import React, { useState } from 'react';

const FloorList = () => {
    const [page, setPage] = useState(1);
    const [select, setSelect] = useState(0);
    const [tab, setTab] = useState(1);

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
                            <div className="navi_main_text">층별안내</div>
                            <div className="navi_arrow"></div>
                            <div className={`navi_select_box ${select === 2 && "active"}`}>
                                <div className="select_row">층별안내</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="board_container">
                    <div className="title_box">
                        <div className="navi_text">
                            홈{">"}알림 및 소식{">"}
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
                                    {[...Array(parseInt(10))].map((data, index) => {
                                        return (
                                            <tr className="body_row">
                                                <td className="body_section num">{index + 1}</td>
                                                <td className="body_section visiable">학생</td>
                                                <td className="body_section title">
                                                    AI 기술 도입 빅데이터 분석 전문인력 양성교육
                                                </td>
                                                <td className="body_section date">
                                                    2024.01.10~2024.10.10
                                                </td>
                                                <td className="body_section date">
                                                    2024.01.10~2024.10.10
                                                </td>
                                                <td className="body_section state">
                                                    <div className="state_icon">접수중</div>

                                                    {/* 접수마감 */}
                                                </td>
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