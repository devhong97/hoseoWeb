import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "tui-color-picker/dist/tui-color-picker.css";
import { useNavigate, useLocation } from "react-router-dom";
import MyCalendar from "../../MyCalendar/MyCalendar";

const FacilityWrite = () => {
  const topRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [select, setSelect] = useState(0);
  const [locationKey, setLocationKey] = useState("");

  //캘린더를 위한 데이터
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const [selectStart, setSelectStart] = useState("");
  const [selectEnd, setSelectEnd] = useState("");

  const [facility_code_list, setFacility_code_list] = useState([]);
  const [selectFacility, setSelectFacility] = useState(null);
  const [step, setStep] = useState(1);
  const [reservation_name, setReservation_name] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [password, setPassword] = useState("");

  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isDateCheck, setIsDateCheck] = useState(false);

  const [timeData, setTimeData] = useState([
    9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ]);

  const [searchTerm, setSearchTerm] = useState(""); //검색어
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [searchOption, setSearchOption] = useState("연락처"); //검색조건
  const [totalPages, setTotalPages] = useState(1); // 총 페이지 수
  const [totalItems, setTotalItems] = useState(""); // 총  게시글 수
  const [page, setPage] = useState(1);
  const pageSize = 6; // 페이지당 항목 수
  useEffect(() => {
    if (locationKey === "") {
      setLocationKey(location.key);
    }

    if (locationKey !== "" && locationKey !== location.key) {
      window.location.reload();
    }
  }, [location.key]);

  useEffect(() => {
    axios
      .get(
        `https://ciuc.or.kr:8443/api/get/facility_code_list?page=${page}&pageSize=${pageSize}`
      )
      .then((res) => {
        //console.log("!@!@!", response.data.data);
        const { totalItems, results } = res.data;
        const listTotal = Math.ceil(totalItems / pageSize);
        setTotalPages(listTotal);
        setTotalItems(totalItems);
        setFacility_code_list(results);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [currentPage, page]);

  useEffect(() => {
    if (start !== null) {
      const year = start.getFullYear().toString();
      let month = (start.getMonth() + 1).toString();
      month = month.length === 1 ? "0" + month : month;
      let day = start.getDate().toString();
      day = day.length === 1 ? "0" + day : day;
      setSelectStart(`${year}-${month}-${day}`);
    }
    if (end !== null) {
      const year = end.getFullYear().toString();
      let month = (end.getMonth() + 1).toString();
      month = month.length === 1 ? "0" + month : month;
      let day = end.getDate().toString();
      day = day.length === 1 ? "0" + day : day;
      setSelectEnd(`${year}-${month}-${day}`);
    }
  }, [start, end]);

  useEffect(() => {
    if (selectStart !== "" && selectEnd !== "") {
      setIsDateCheck(true);
    }
  }, [selectStart, selectEnd]);

  // 글 등록 핸들러
  const handleSubmit = async () => {
    if (selectFacility === null) {
      alert("시설을 선택해주세요.");
      return;
    } else if (selectStart === "") {
      alert("예약 시작일을 선택해주세요.");
      return;
    } else if (selectEnd === "") {
      alert("예약 종료일을 선택해주세요.");
      return;
    } else if (startTime === "") {
      alert("예약 시작시간을 선택해주세요.");
      return;
    } else if (endTime === "") {
      alert("예약 종료시간을 선택해주세요.");
      return;
    } else if (reservation_name === "") {
      alert("예약자를 입력해주세요.");
      return;
    } else if (phoneNumber === "") {
      alert("연락처를 입력해주세요.");
      return;
      // } else if (password === "") {
      //   alert("비밀번호를 입력해주세요.");
      //   return;
    }

    const formData = new FormData();
    formData.append("facility_code", selectFacility.facility_code);
    formData.append("start_date", selectStart);
    formData.append("end_date", selectEnd);
    formData.append("start_time", startTime);
    formData.append("end_time", endTime);
    formData.append("reservation_name", reservation_name);
    formData.append("phoneNumber", phoneNumber);
    // formData.append("password", password);

    try {
      const response = await axios.post(
        "https://ciuc.or.kr:8443/api/post/facility_reserve_write",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(`예약이 완료되었습니다.`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const selectedIdx = parseInt(e.target.value, 10);
    const selectedFacility = facility_code_list.find(
      (facility) => facility.idx === selectedIdx
    );
    setSelectFacility(selectedFacility);
    setStart(null);
    setEnd(null);
    setSelectStart("");
    setSelectEnd("");
    setStartTime("");
    setEndTime("");
    setIsDateCheck(false);
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const startTimeOptions = timeData
    .filter((hour) => {
      if (endTime !== "") {
        const endHour = parseInt(endTime.split(":")[0], 10);
        return endHour > hour;
      }
      return true;
    })
    .map((hour) => (
      <option key={hour} value={`${hour}:00`}>
        {hour}:00
      </option>
    ));
  const endTimeOptions = timeData
    .filter((hour) => {
      if (startTime !== "") {
        const startHour = parseInt(startTime.split(":")[0], 10);
        return startHour < hour;
      }
      return true;
    })
    .map((hour) => (
      <option key={hour} value={`${hour}:00`}>
        {hour}:00
      </option>
    ));

  const handleMouseDown = (e) => {
    if (!isDateCheck) {
      e.preventDefault(); // 클릭을 막음
      alert("날짜를 선택해주세요.");
    }
  };

  const handleSelect = (num) => {
    if (select === num) {
      setSelect(0);
    } else {
      setSelect(num);
    }
  };

  const moveBoard = (cate) => {
    navigate(`/board/${cate}`, { state: { cate: cate } });
  };

  const movePage = (path) => {
    navigate(path);
  };

  const handlePage = (num) => {
    setPage(num);
  };

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

  const scrollTop = (step) => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setStep(step);
  };

  return (
    <div className="board_wrap" ref={topRef}>
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
                  onClick={() => navigate("/board/facility/write")}
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
          <div className="facility_box">
            {step === 1 && (
              <div className="facility_select_box">
                <div className="common_info">
                  <div className="info_title">[이용안내]</div>
                  <div className="info_content">
                    <ul>
                      <li className="content_title">
                        강의장 및 대회의실 (VAT 별도)
                      </li>
                      <li>1시간 미만은 1시간으로 계산</li>
                      <li>주말 및 공휴일 : 20% 가산</li>
                      <li>입주기업 : 50% 할인 / 가족기업 20% 할인</li>
                      <li>대학 및 융합원 주관 행사의 경우 무료로 사용</li>
                    </ul>
                    <ul>
                      <li className="content_title">부속설비</li>
                      <li>전자교탁, 빔 프로젝터 사용료 : 1시간 10,000원</li>
                      <li>
                        전산강의장 컴퓨터 사용료 : 1시간 20,000원
                        <p>
                          ※ 부속설비 사용 시 강의장 및 대회의실 사용 시간 전체에
                          대해 부과
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="facility_list_box">
                  {facility_code_list.length === 0 ? (
                    <div className="body_row">데이터가 존재하지 않습니다.</div>
                  ) : (
                    facility_code_list.map((facility) => (
                      <div
                        className="facility_item"
                        onClick={() => {
                          setSelectFacility(facility);
                          setStart(null);
                          setEnd(null);
                          setSelectEnd("");
                          scrollTop(2);
                        }}
                        key={facility.idx}
                      >
                        <div className="facility_item_title">
                          {facility.facility_name}
                        </div>
                        <div className="facility_item_image">
                          <img
                            className="facility_image"
                            src={`https://ciuc.or.kr:8443${facility.file_url}`}
                          />
                        </div>
                        <div className="facility_item_detail">
                          <ul>
                            <li>
                              <span className="label">형태</span>
                              <span className="value">
                                {facility.facility_form}
                              </span>
                            </li>
                            <li>
                              <span className="label">인원</span>
                              <span className="value">
                                {facility.max_person}
                              </span>
                            </li>
                            <li>
                              <span className="label">사용료</span>
                              <span className="value">
                                {facility.facility_fee}
                              </span>
                            </li>
                            <li>
                              <span className="label">부속설비</span>
                              <span className="value">
                                {facility.sub_facility}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="pagination_box">{renderPagination()}</div>
              </div>
            )}
            {step === 2 && (
              <div className="facility_first">
                <div className="facility_left">
                  <MyCalendar
                    start={start}
                    setStart={setStart}
                    end={end}
                    setEnd={setEnd}
                    selectFacility={selectFacility}
                    setSelectEnd={setSelectEnd}
                  ></MyCalendar>
                </div>
                <div className="facility_right">
                  <div className="facility_inner_box">
                    <div className="facility_select_view">
                      <div className="facility_content">
                        <div className="facility_facility_title">시설 선택</div>
                        <div>
                          <select
                            className="facility_select"
                            onChange={handleChange}
                            value={
                              selectFacility !== null ? selectFacility.idx : ""
                            }
                            // onclick={() => {
                            //   if(selectStart === "" || selectEnd === "") {

                            //   }
                            // }}
                          >
                            <option value="" disabled>
                              선택
                            </option>
                            {facility_code_list.map((facility) => (
                              <option key={facility.idx} value={facility.idx}>
                                {facility.facility_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="time_content">
                        <div className="facility_tile_title">시간 선택</div>
                        <div className="time_select_box">
                          <select
                            className="time_select"
                            value={startTime}
                            onChange={handleStartTimeChange}
                            onMouseDown={handleMouseDown}
                          >
                            <option value={""} disabled>
                              선택
                            </option>
                            {startTimeOptions}
                          </select>
                          <span>~</span>
                          <select
                            className="time_select"
                            value={endTime}
                            onChange={handleEndTimeChange}
                            onMouseDown={handleMouseDown}
                          >
                            <option value={""} disabled>
                              선택
                            </option>
                            {endTimeOptions}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="facility_view">
                      <div className="facility_view_content">
                        <div className="facility_title_view">선택한 시설</div>
                        <div className="facility_data">
                          {selectFacility ? selectFacility.facility_name : ""}
                        </div>
                      </div>
                      <div className="date_view_content">
                        <div className="date_title_view">선택한 날짜</div>
                        <div className="date_box">
                          <div className="date_start_data">
                            {selectStart !== null ? selectStart : ""}
                          </div>
                          <span>-</span>
                          <div className="date_end_data">
                            {selectEnd !== null ? selectEnd : ""}
                          </div>
                        </div>
                      </div>
                      <div className="row_btn_box">
                        <div className="back_btn" onClick={(e) => setStep(1)}>
                          돌아가기
                        </div>
                        <div
                          className="more_btn"
                          onClick={() => {
                            if (selectFacility === null) {
                              alert("시설을 선택해주세요.");
                            } else if (!selectStart) {
                              alert("예약 시작일을 선택해주세요.");
                            } else if (!selectEnd) {
                              alert("예약 종료일을 선택해주세요.");
                            } else if (!startTime) {
                              alert("예약 시작시간을 선택해주세요.");
                            } else if (!endTime) {
                              alert("예약 종료시간을 선택해주세요.");
                            } else {
                              scrollTop(3);
                            }
                          }}
                        >
                          다음단계
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="facility_second">
                <div className="facility_left">
                  <div className="facility_title">
                    {selectFacility.facility_name}
                  </div>
                  <div className="facility_image_box">
                    {selectFacility.file_url ? (
                      <img
                        className="facility_image"
                        src={`https://ciuc.or.kr:8443${selectFacility.file_url}`}
                        alt="팝업이미지"
                      />
                    ) : (
                      <div className="facility_image_none"></div>
                    )}
                  </div>
                  <div className="facility_detail">
                    <ul>
                      <li>
                        <span className="label">인원</span>
                        <span className="value">
                          {selectFacility.facility_form}
                        </span>
                      </li>
                      <li>
                        <span className="label">용도</span>
                        <span className="value">
                          {selectFacility.max_person}
                        </span>
                      </li>
                      <li>
                        <span className="label">시설</span>
                        <span className="value">
                          {selectFacility.facility_fee}
                        </span>
                      </li>
                      <li>
                        <span className="label">위치</span>
                        <span className="value">
                          {selectFacility.sub_facility}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="facility_right">
                  <div className="facility_input">
                    <div className="input_content">
                      <div className="input_label">예약자</div>
                      <input
                        className="input_text"
                        placeholder="예약자 대표 성함을 입력해주세요."
                        value={reservation_name}
                        type="text"
                        onChange={(e) => setReservation_name(e.target.value)}
                      />
                    </div>
                    <div className="input_content">
                      <div className="input_label"> 연락처</div>
                      {/* <input
                      placeholder="연락 가능한 전화번호를 입력해주세요."
                      value={phoneNumber}
                      type="text"
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    /> */}
                      <input
                        placeholder="연락처를 입력해주세요."
                        className="input_text"
                        type="text"
                        value={phoneNumber}
                        onChange={(e) =>
                          setPhoneNumber(e.target.value.replace(/[^0-9]/g, ""))
                        }
                        maxLength={13}
                      />
                    </div>
                    {/* <div className="input_content">
                      <div className="input_label"> 비밀번호</div>
                      <input
                        className="input_text"
                        placeholder="게시글 비밀번호를 입력해주세요."
                        value={password}
                        type="password"
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div> */}
                    <div className="row_btn_box">
                      <div className="back_btn" onClick={(e) => setStep(2)}>
                        돌아가기
                      </div>
                      <div className="more_btn" onClick={handleSubmit}>
                        예약 신청하기
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityWrite;
