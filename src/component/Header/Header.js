import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Fragment } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const inputRef = useRef(null);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setOpenMenu(""); // 메뉴 닫을 때 openMenu 상태도 초기화
  };

  const handleMenu = (type) => {
    if (type === openMenu) {
      setOpenMenu("");
    } else {
      setOpenMenu(type);
    }
  };

  const movePage = (path) => {
    setOpenMenu("");
    navigate(path);
  };
  const moveBoard = (cate) => {
    setOpenMenu("");
    navigate(`/board/${cate}`, { state: { cate: cate } });
  };
  const handlerIntegratedSearch = () => {
    navigate(`/integratedSearch?searchText=${searchText}`);
    setSearchActive(false);
    setSearchText("");
  };

  useEffect(() => {
    if (searchActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchActive]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 기본 동작 방지
      handlerIntegratedSearch();
    }
  };

  return (
    <div
      className={`header_wrap ${openMenu && "menu_active"}`}
      onMouseLeave={handleMenuClose}
      onMouseEnter={() => handleMenu("web")}
    >
      {/* <div className="header_top_box">
        <div className="header_back">
          <div className="top_small_menu" onClick={() => navigate("/")}>
            HOME
          </div>
          <div className="top_small_menu">SITEMAP</div>
          <div className="top_small_menu">CONTACT</div>
        </div>
      </div> */}
      <div className="header_bottom_box">
        <div className="header_back">
          <div className="logo_box" onClick={() => navigate("/")}>
            <div className="logo_img"></div>
          </div>
          <div className="right_box">
            <div className="menu_box">
              <div className="main_menu">
                알림 및 소식
                <div className={`menu_row ${openMenu === "web" && "active"}`}>
                  <div className="sub_menu_box">
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("notice")}
                    >
                      공지사항
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("business")}
                    >
                      사업공고
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("education")}
                    >
                      교육공고
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("employment")}
                    >
                      채용공고
                    </div>
                    <div className="sub_menu" onClick={() => moveBoard("bid")}>
                      입찰공고
                    </div>
                    <div className="sub_menu" onClick={() => moveBoard("news")}>
                      보도자료
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("reference")}
                    >
                      자료실
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("archive")}
                    >
                      융합원 아카이브
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_menu">
                사업분야
                <div className={`menu_row ${openMenu === "web" && "active"}`}>
                  <div className="sub_menu_box">
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/fusionSupportProgram")}
                    >
                      산학융합지구조성사업
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/chungnamInnovationProject")}
                    >
                      기업지원사업
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() =>
                        movePage("/localIndustryTalentDevelopment")
                      }
                    >
                      인재양성사업
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/dangjinStartupSupport")}
                    >
                      창업육성사업
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_menu">
                기업연구동
                <div className={`menu_row ${openMenu === "web" && "active"}`}>
                  <div className="sub_menu_box">
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/inquiryinfo")}
                    >
                      입주안내
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/floor")}
                    >
                      층별안내
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/company")}
                    >
                      입주기업 현황
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("inquiry")}
                    >
                      입주문의
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_menu">
                보유시설
                <div className={`menu_row ${openMenu === "web" && "active"}`}>
                  <div className="sub_menu_box">
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/meetingroom")}
                    >
                      회의실
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/computer")}
                    >
                      전산실습실
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/printing")}
                    >
                      3D프린터
                    </div>
                    <div className="sub_menu" onClick={() => movePage("/arvr")}>
                      AR/VR
                    </div>
                    <div className="sub_menu" onClick={() => movePage("/cnc")}>
                      CNC/MCT
                    </div>
                    <div
                      className="sub_menu"
                      // onClick={() => moveBoard("facility")}
                      onClick={() => {
                        navigate("/board/facility/write", {
                          state: { step: 1 },
                        });
                        setOpenMenu("");
                      }}
                    >
                      시설예약
                    </div>
                  </div>
                </div>
              </div>
              <div className="main_menu">
                융합원소개
                <div className={`menu_row ${openMenu === "web" && "active"}`}>
                  <div className="sub_menu_box">
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/intro")}
                    >
                      인사말
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/vision")}
                    >
                      비전 및 목표
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/history")}
                    >
                      연혁
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/organization")}
                    >
                      조직도
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/introduce")}
                    >
                      소개자료
                    </div>
                    <div className="sub_menu" onClick={() => movePage("/map")}>
                      오시는 길
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="icon_box">
              <div
                className="menu_icon list web"
                onClick={() => handleMenu("web")}
              ></div>
              <div
                className="menu_icon list mobile"
                onClick={() => handleMenu("mobile")}
              ></div>
              <div className="search_icon_box">
                <div
                  className={`search_icon ${searchActive && "active"}`}
                  onClick={() => {
                    setSearchActive(!searchActive);
                  }}
                ></div>
                {searchActive && (
                  <div className="search_form">
                    <input
                      id="search_form"
                      ref={inputRef}
                      type="text"
                      placeholder="검색어를 입력하세요."
                      value={searchText}
                      onChange={(e) => setSearchText(e.target.value)}
                      onKeyDown={handleKeyDown}
                    />
                    <div
                      className="search_submit"
                      onClick={() => handlerIntegratedSearch()}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`menu_show_area ${openMenu === "mobile" && "active"}`}>
        <div className={`menu_show_box mobile`}>
          <div className="show_menu_back mobile">
            <div className="menu_container">
              <div className="menu_row">
                <div className="main_menu">알림 및 소식</div>
                <div className="sub_menu_box">
                  <div className="sub_menu" onClick={() => moveBoard("notice")}>
                    공지사항
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => moveBoard("business")}
                  >
                    사업공고
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => moveBoard("education")}
                  >
                    교육공고
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => moveBoard("employment")}
                  >
                    채용공고
                  </div>
                  <div className="sub_menu" onClick={() => moveBoard("bid")}>
                    입찰공고
                  </div>
                  <div className="sub_menu" onClick={() => moveBoard("news")}>
                    보도자료
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => moveBoard("reference")}
                  >
                    자료실
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => moveBoard("archive")}
                  >
                    융합원 아카이브
                  </div>
                </div>
              </div>

              <div className="menu_row">
                <div className="main_menu">융합원 소개</div>
                <div className="sub_menu_box">
                  <div className="sub_menu" onClick={() => movePage("/intro")}>
                    인사말
                  </div>
                  <div className="sub_menu" onClick={() => movePage("/vision")}>
                    비전 및 목표
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/history")}
                  >
                    연혁
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/organization")}
                  >
                    조직도
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/introduce")}
                  >
                    소개자료
                  </div>
                  <div className="sub_menu" onClick={() => movePage("/map")}>
                    오시는 길
                  </div>
                </div>
              </div>
              <div className="menu_row">
                <div className="main_menu sla">보유시설</div>
                <div className="sub_menu_box">
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/meetingroom")}
                  >
                    회의실
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/computer")}
                  >
                    전산실습실
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/printing")}
                  >
                    3D프린터
                  </div>
                  <div className="sub_menu" onClick={() => movePage("/arvr")}>
                    AR/VR
                  </div>
                  <div className="sub_menu" onClick={() => movePage("/cnc")}>
                    CNC/MCT
                  </div>
                  <div
                    className="sub_menu"
                    // onClick={() => moveBoard("facility")}
                    onClick={() => {
                      navigate("/board/facility/write", { state: { step: 1 } });
                      setOpenMenu("");
                    }}
                  >
                    시설예약
                  </div>
                </div>
              </div>
            </div>
            <div className="menu_container">
              <div className="menu_row">
                <div className="main_menu">기업연구동</div>
                <div className="sub_menu_box">
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/inquiryinfo")}
                  >
                    입주안내
                  </div>
                  <div className="sub_menu" onClick={() => movePage("/floor")}>
                    층별안내
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/company")}
                  >
                    입주기업 현황
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => moveBoard("inquiry")}
                  >
                    입주문의
                  </div>
                </div>
              </div>
              <div className="menu_row">
                <div className="main_menu">사업분야</div>
                <div className="sub_menu_box">
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/fusionSupportProgram")}
                  >
                    산학융합지구조성사업
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/chungnamInnovationProject")}
                  >
                    기업지원사업
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/localIndustryTalentDevelopment")}
                  >
                    인재양성사업
                  </div>
                  <div
                    className="sub_menu"
                    onClick={() => movePage("/dangjinStartupSupport")}
                  >
                    창업육성사업
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`menu_show_area ${openMenu === "web" && "active"}`}
        onMouseLeave={() => handleMenu("")}
      >
        <div className={`menu_show_box web`}>
          <div className="show_menu_back web">
            {/* <div className="menu_container">
              <div className="menu_box">
                <div className="menu_row">
                  <div className="sub_menu_box">
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("notice")}
                    >
                      공지사항
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("business")}
                    >
                      사업공고
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("education")}
                    >
                      교육공고
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("employment")}
                    >
                      채용공고
                    </div>
                    <div className="sub_menu" onClick={() => moveBoard("bid")}>
                      입찰공고
                    </div>
                    <div className="sub_menu" onClick={() => moveBoard("news")}>
                      보도자료
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("reference")}
                    >
                      자료실
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("archive")}
                    >
                      융합원 아카이브
                    </div>
                  </div>
                </div>
                <div className="menu_row">
                  <div className="sub_menu_box">
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/fusionSupportProgram")}
                    >
                      산학융합지구조성사업
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/chungnamInnovationProject")}
                    >
                      기업지원사업
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/localIndustryTalentDevelopment")}
                    >
                      인재양성사업
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/dangjinStartupSupport")}
                    >
                      창업육성사업
                    </div>
                  </div>
                </div>
                <div className="menu_row">
                  <div className="sub_menu_box">
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/inquiryinfo")}
                    >
                      입주안내
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/floor")}
                    >
                      층별안내
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/company")}
                    >
                      입주기업 현황
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("inquiry")}
                    >
                      입주문의
                    </div>
                  </div>
                </div>

                <div className="menu_row">
                  <div className="sub_menu_box">
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/meetingroom")}
                    >
                      회의실
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/computer")}
                    >
                      전산실습실
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/printing")}
                    >
                      3D프린터
                    </div>
                    <div className="sub_menu" onClick={() => movePage("/arvr")}>
                      AR/VR
                    </div>
                    <div className="sub_menu" onClick={() => movePage("/cnc")}>
                      CNC/MCT
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => moveBoard("facility")}
                    >
                      시설예약
                    </div>
                  </div>
                </div>
                <div className="menu_row">
                  <div className="sub_menu_box">
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/intro")}
                    >
                      인사말
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/vision")}
                    >
                      비전 및 목표
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/history")}
                    >
                      연혁
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/organization")}
                    >
                      조직도
                    </div>
                    <div
                      className="sub_menu"
                      onClick={() => movePage("/introduce")}
                    >
                      소개자료
                    </div>
                    <div className="sub_menu" onClick={() => movePage("/map")}>
                      오시는 길
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="blank_box"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
