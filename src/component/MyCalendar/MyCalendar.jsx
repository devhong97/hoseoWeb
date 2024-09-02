import React, { useState, useEffect } from "react";
import axios from "axios";

const MyCalendar = ({
  start,
  setStart,
  end,
  setEnd,
  selectFacility,
  setSelectEnd,
}) => {
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(
    (new Date().getMonth() + 1).toString().padStart(2, "0")
  );
  const [day, setDay] = useState(new Date().getDate());
  const [startOfMonth, setStartOfMonth] = useState(null);
  const [endOfMonth, setEndOfMonth] = useState(null);
  const [startDay, setStartDay] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSelectingEnd, setIsSelectingEnd] = useState(false); // 종료일 선택 중인지 상태 추가
  const [reservedDate, setReservedDate] = useState([]);

  useEffect(() => {
    formatDate();
  }, [date]);

  // useEffect(() => {
  //   if (selectFacility !== null) {
  //     fetchData();
  //   }
  // }, [selectFacility, date]);

  const formatDate = () => {
    const currentYear = date.getFullYear().toString();
    let currentMonth = (date.getMonth() + 1).toString();
    currentMonth =
      currentMonth.length === 1 ? "0" + currentMonth : currentMonth;
    const currentDay = date.getDate().toString();
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    var firstDayOfWeek = startOfMonth.getDay();

    setYear(currentYear);
    setMonth(currentMonth);
    setDay(currentDay);
    setStartOfMonth(startOfMonth);
    setEndOfMonth(endOfMonth);
    setStartDay(firstDayOfWeek === 0 ? 1 - 7 : 1 - firstDayOfWeek);
  };

  const handleDayClick = (calendarDate) => {
    //console.log("!!!1", calendarDate.getDate());
    // if (reservedDate.includes(calendarDate.getDate())) {
    //   return; // 비활성화된 날짜는 클릭하지 못하도록
    // }
    // console.log("@@@@@@@", end);
    if (!isSelectingEnd) {
      setStart(calendarDate);
      setEnd(null);
      setSelectEnd("");
      setIsSelectingEnd(true);
    } else {
      if (calendarDate < start) {
        setStart(calendarDate);
        setEnd(null);
      } else {
        const startDate = new Date(start);
        const endDate = new Date(calendarDate);
        // const hasReservedDateInRange = reservedDate.some(
        //   (reservedDay) =>
        //     reservedDay > startDate.getDate() && reservedDay < endDate.getDate()
        // );
        // if (hasReservedDateInRange) {
        //   setStart(calendarDate); // 시작일을 새로운 날짜로 설정
        //   setEnd(null); // 종료일 초기화
        // } else {
        setEnd(calendarDate);
        setIsSelectingEnd(false);
        // }
      }
    }
  };

  // const fetchData = async () => {
  //   try {
  //     let currentMonth = (date.getMonth() + 1).toString();
  //     currentMonth =
  //       currentMonth.length === 1 ? "0" + currentMonth : currentMonth;

  //     const response = await axios.get(
  //       // `https://ciuc.or.kr:8443/api/get/facility_reserveDate?currentDate=${date.getFullYear()}-${currentMonth}&facility_code=${
  //       //   selectFacility.facility_code
  //       // }`
  //       `https://ciuc.or.kr:8443/api/get/facility_reserveDate?start_date=${selectStart}&end_date=${selectEnd}&facility_code=${selectFacility.facility_code}`
  //     );
  //     const data = response.data.data; // 서버에서 받은 데이터
  //     setReserveTime(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  const renderCalendar = () => {
    const weeks = [];
    let currentDay = startDay;

    for (let i = 0; i < 6; i++) {
      // 6 rows (weeks)
      const days = [];
      let isWeekValid = false;
      for (let j = 0; j < 7; j++) {
        // 7 columns (days per week)
        const calendarDate = new Date(
          date.getFullYear(),
          date.getMonth(),
          currentDay
        );
        const dayOfWeek = calendarDate.getDay();
        let classNames = "day";
        if (calendarDate >= startOfMonth && calendarDate <= endOfMonth) {
          isWeekValid = true;
          if (selectFacility === null) {
            classNames += " none";
            if (calendarDate.toDateString() === new Date().toDateString()) {
              classNames += " today";
            }
            const isClickable =
              calendarDate.setHours(0, 0, 0, 0) >=
              new Date().setHours(0, 0, 0, 0);
            if (!isClickable) {
              classNames += " disabled";
            }
            if (dayOfWeek === 0) {
              classNames += " sun";
            } else if (dayOfWeek === 6) {
              classNames += " sat";
            }
            days.push(
              <td
                key={calendarDate}
                onClick={() => {
                  alert("시설을 선택해주세요.");
                }}
              >
                <span className={classNames}>{calendarDate.getDate()}</span>
              </td>
            );
          } else {
            if (calendarDate.toDateString() === new Date().toDateString()) {
              classNames += " today";
            }
            if (start && calendarDate.toDateString() === start.toDateString()) {
              classNames += " start-date";
            }
            if (end && calendarDate.toDateString() === end.toDateString()) {
              classNames += " end-date";
            }
            if (start && end && calendarDate >= start && calendarDate <= end) {
              classNames += " in-range";
            }

            const isClickable =
              calendarDate.setHours(0, 0, 0, 0) >=
              new Date().setHours(0, 0, 0, 0);
            if (isClickable) {
              classNames += " possible";
            } else {
              classNames += " disabled";
            }

            if (dayOfWeek === 0) {
              classNames += " sun";
            } else if (dayOfWeek === 6) {
              classNames += " sat";
            }
            days.push(
              <td
                key={calendarDate}
                onClick={
                  isClickable ? () => handleDayClick(calendarDate) : null
                }
              >
                <span className={classNames}>{calendarDate.getDate()}</span>
              </td>
            );
          }
        } else {
          days.push(
            <td key={currentDay}>
              <span className={classNames}></span>
            </td>
          );
        }

        currentDay++;
      }
      if (days.some((day) => day.props.children !== undefined) && isWeekValid) {
        weeks.push(<tr key={i}>{days}</tr>);
      }
    }

    return weeks;
  };

  const handleMonthChange = (type) => {
    if (type === "prev") {
      const prevDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
      setDate(prevDate);
    } else {
      const nextDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
      setDate(nextDate);
    }
  };
  return (
    <div className="myCalendar">
      <div className="calendar_date">
        <div className="calendar_date_yymm">
          {year}.{month}
        </div>
        <div className="calendar_change">
          <div
            className="calendar_prev"
            onClick={() => handleMonthChange("prev")}
          ></div>
          <div
            className="calendar_next"
            onClick={() => handleMonthChange("next")}
          ></div>
        </div>
      </div>
      <table className="calendar_box">
        <thead>
          <tr>
            <th className="sun">일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th className="sat">토</th>
          </tr>
        </thead>
        <tbody className="calendar_List">{renderCalendar()}</tbody>
      </table>
    </div>
  );
};

export default MyCalendar;
