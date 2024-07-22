import React, { useEffect, useState } from "react";
import "./Popup.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Popup = () => {
  const [popups, setPopups] = useState([]);
  const [showPopup, setShowPopup] = useState(true);
  const roots = "http://localhost:3001";

  useEffect(() => {
    fetchPopups();
  }, []);

  useEffect(() => {
    const hiddenUntil = localStorage.getItem("popupHiddenUntil");
    if (hiddenUntil) {
      const today = new Date().toISOString().slice(0, 10);
      if (hiddenUntil === today) {
        setShowPopup(false);
      }
    }
  }, []);

  const fetchPopups = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/get/popup_print"
      );
      setPopups(response.data.data); // 모든 팝업 데이터를 가져옴
    } catch (error) {
      console.error("Error fetching popups:", error);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleHideForToday = () => {
    const today = new Date().toISOString().slice(0, 10);
    localStorage.setItem("popupHiddenUntil", today);
    setShowPopup(false);
  };

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`custom-arrow custom-next ${className}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`custom-arrow custom-prev ${className}`}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  };

  const numPopups = popups.length; // 팝업 데이터의 개수

  const settings = {
    dots: true,
    infinite: numPopups > 1, // 데이터가 1개보다 많을 때만 무한 루프 활성화
    slidesToShow: 3, // 기본적으로 3개 슬라이드를 보여줌
    slidesToScroll: 1,
    autoplay: numPopups > 3, // 데이터가 3개보다 많을 때만 자동 재생 활성화
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024, // 태블릿 사이즈 이하
        settings: {
          slidesToShow: 2, // 태블릿에서는 2개 슬라이드를 보여줌
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // 모바일 사이즈 이하
        settings: {
          slidesToShow: 1, // 모바일에서는 1개 슬라이드를 보여줌
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!showPopup || popups.length === 0) {
    return null;
  }

  return (
    <div className="popup-container">
      <div className="popup-content">
        <Slider {...settings}>
          {popups.map((popup, index) => (
            <div key={index} className="popup">
              {popup.url ? (
                <a href={popup.url} target="_blank" rel="noopener noreferrer">
                  <img src={`${roots}${popup.file_url}`} alt={popup.title} />
                </a>
              ) : (
                <img src={`${roots}${popup.file_url}`} alt={popup.title} />
              )}
            </div>
          ))}
        </Slider>
        <div className="popup-buttons">
          <button onClick={handleHideForToday}>오늘 하루 보지 않기</button>
          <button onClick={handleClosePopup}>닫기</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
