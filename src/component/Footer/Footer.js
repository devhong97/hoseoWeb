import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight, FiPause, FiPlay } from "react-icons/fi"; // react-icons에서 사용할 아이콘 import
import ft1 from "../../assets/image/ft_1.png";
import ft2 from "../../assets/image/ft_2.png";
import ft3 from "../../assets/image/ft_3.png";
import ft4 from "../../assets/image/ft_4.png";
import ft5 from "../../assets/image/ft_5.png";
import ft6 from "../../assets/image/ft_6.png";
import ft7 from "../../assets/image/ft_7.png";
import ft8 from "../../assets/image/ft_8.png";
import ft9 from "../../assets/image/ft_9.png";
import ft10 from "../../assets/image/ft_10.png";
import ft11 from "../../assets/image/ft_11.png";
import ft12 from "../../assets/image/ft_12.png";
import "./FooterSlide.css"; // CSS 파일 import

const Footer = () => {
  const navigate = useNavigate();
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);
  const [seoSettingData, setSeoSettingData] = useState(null);

  useEffect(() => {
    axios
      .get("https://ciuc.or.kr:8443/api/get/seo")
      .then((response) => {
        setSeoSettingData(response.data);
      })
      .catch((error) => {
        console.error("SEO 데이터를 가져오는 중 오류가 발생했습니다:", error);
      });
  }, []);

  const toggleAnimation = () => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      if (isPaused) {
        slider.slickPlay(); // react-slick의 재생 메서드 호출
      } else {
        slider.slickPause(); // react-slick의 일시 정지 메서드 호출
      }
      setIsPaused(!isPaused);
    }
  };

  const icons = [ft1, ft2, ft3, ft4, ft5, ft6, ft7, ft8, ft9, ft10, ft11, ft12];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5, // 한 줄에 표시할 이미지 개수
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleIconClick = (index) => {
    switch (index) {
      case 0:
        window.open("https://www.motie.go.kr/", "_blank");
        break;
      case 1:
        window.open("http://www.chungnam.go.kr/main.do", "_blank");
        break;
      case 2:
        navigate("/path3");
        break;
      case 3:
        window.open("https://www.example.com/", "_blank");
        break;
      case 4:
        navigate("/path5");
        break;
      case 5:
        window.open("https://www.example.com/", "_blank");
        break;
      case 6:
        window.open("https://www.example.com/", "_blank");
        break;
      case 7:
        navigate("/path8");
        break;
      case 8:
        window.open("https://www.example.com/", "_blank");
        break;
      case 9:
        navigate("/path10");
        break;
      case 10:
        window.open("https://www.example.com/", "_blank");
        break;
      case 11:
        window.open("https://www.example.com/", "_blank");
        break;
      default:
        break;
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // react-slick의 이전 슬라이드 메서드 호출
    }
  };

  const pauseSlide = () => {
    if (sliderRef.current) {
      if (isPaused) {
        sliderRef.current.slickPlay(); // react-slick의 재생 메서드 호출
      } else {
        sliderRef.current.slickPause(); // react-slick의 일시 정지 메서드 호출
      }
      setIsPaused(!isPaused);
    }
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // react-slick의 다음 슬라이드 메서드 호출
    }
  };

  return (
    <div className="footer_wrap">
      <div className="footer_back">
        {/* <div className="footer_top_box_m2">
          <div className="slide">
            <Slider ref={sliderRef} {...settings}>
              {icons.map((icon, index) => (
                <div
                  className="icon"
                  key={index}
                  onClick={() => handleIconClick(index)}
                >
                  <img
                    src={icon}
                    alt={`icon-${index}`}
                    className="icon-image"
                  />
                </div>
              ))}
            </Slider>
            <div className="button-container">
              <button onClick={prevSlide}>
                <FiChevronLeft />
              </button>
              <button onClick={pauseSlide}>
                {isPaused ? <FiPlay /> : <FiPause />}
              </button>
              <button onClick={nextSlide}>
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div> */}

        <div className="footer_top_box">
          <div className="footer-sub-wrap">
            <div className="ftbox-1">
              <div
                className="footer_icon youtube"
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/@user-tk4tu7ff2q",
                    "_blank"
                  )
                }
              ></div>
              <div
                className="footer_icon youtube-2"
                onClick={() =>
                  window.open("https://www.youtube.com/@user-djstart", "_blank")
                }
              ></div>
              <div
                className="footer_icon naver"
                onClick={() =>
                  window.open("https://blog.naver.com/ciuc8558", "_blank")
                }
              ></div>
              <div
                className="footer_icon mail"
                onClick={() =>
                  window.open("mailto:master@ciuc.or.kr", "_blank")
                }
              ></div>
            </div>
            <div className="ftbox-2">
              <select
                className="full-width-select"
                defaultValue="option1"
                onChange={(e) => {
                  window.open(e.target.value, "_blank");
                }}
              >
                <option value="/">산학융합지구 사이트 바로가기</option>
                <option value="https://www.gwgic.or.kr/">강원산학융합원</option>
                <option value="https://www.giuci.or.kr">경기산학융합원</option>
                <option value="https://www.gcci.or.kr">
                  경남창원산학융합원
                </option>
                <option value="http://www.ggic.kr">경북경산산학융합원</option>
                <option value="https://giaci.or.kr">경북산학융합원</option>
                <option value="https://www.gici.or.kr">광주산학융합원</option>
                <option value="http://www.biuca.or.kr">부산산학융합원</option>
                <option value="https://www.eiuca.or.kr">
                  에너지밸리산학융합원(나주)
                </option>
                <option value="http://www.ulsan-uic.kr">울산산학융합원</option>
                <option value="http://www.jdiu.or.kr">
                  전남대불산학융합원
                </option>
                <option value="https://www.jyiu.or.kr">
                  전남여수산학융합원
                </option>
                <option value="http://www.jiuc.or.kr">전북산학융합원</option>
                <option value="https://www.jejuiucc.or.kr">
                  제주산학융합원
                </option>
                <option value="https://osongbaio.or.kr">
                  충북바이오산학융합원
                </option>
                <option value="http://ce.or.kr">
                  충북에너지산학융합원(음성)
                </option>
                <option value="https://www.iiaci.or.kr">
                  항공우주산학융합원(인천)
                </option>
              </select>
            </div>
            <div
              className="ftbox-3"
              defaultValue="option1"
              onChange={(e) => {
                window.open(e.target.value, "_blank");
              }}
            >
              <select className="full-width-select" defaultValue="option1">
                <option value="/">유관기관 사이트 바로가기</option>
                <option value="https://www.motie.go.kr/">산업통상자원부</option>
                <option value="http://www.chungnam.go.kr/">충청남도</option>
                <option value="https://www.dangjin.go.kr">당진시</option>
                <option value="https://www.hoseo.ac.kr">호서대학교</option>
                <option value="https://www.kicox.or.kr">
                  한국산업단지공단
                </option>
                <option value="https://www.ctp.or.kr">충남테크노파크</option>
                <option value="https://www.cepa.or.kr">
                  충남일자리경제진흥원
                </option>
                <option value="https://www.dangjin.go.kr/narae.do">
                  당진청년타운나래
                </option>
                <option value="http://djstart.co.kr">
                  당진시중장년기술창업센터
                </option>
              </select>
            </div>
          </div>
        </div>

        <div className="footer_bottom_box">
          <div className="bottom_first_info">
            <div className="line_text" onClick={() => navigate("/introduce")}>
              충남산학융합원 소개
            </div>
            <div className="line_text">개인정보처리방침</div>
            <div className="line_text">이용약관</div>
            <div className="line_text" onClick={() => navigate("/map")}>
              오시는 길
            </div>
            {/* <div className="line_text" onClick={() => navigate("/login")}>
              로그인
            </div> */}
          </div>
          {seoSettingData ? (
            <div className="bottom_second_info">
              <p>상호 : {seoSettingData[0].site_name}</p>
              <p>TEL : {seoSettingData[0].main_number}</p>
              <p>FAX : {seoSettingData[0].fax_number}</p>
              <p>E-mail : {seoSettingData[0].email}</p>
              <br />
              <p>주소 : {seoSettingData[0].address}</p>
              <p>개인정보보호책임자 : {seoSettingData[0].representative}</p>
            </div>
          ) : (
            <div className="bottom_second_info">
              <p>로딩 중...</p>
            </div>
          )}
          <div className="bottom_copy">
            {seoSettingData ? (
              <span>
                Copyright © {seoSettingData[0].site_name}. All rights reserved
              </span>
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
