import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InquiryInfo = () => {
  const [select, setSelect] = useState(0);
  const [tab, setTab] = useState(1);
  const navigate = useNavigate();

  const handleTab = (num) => {
    setTab(num);
  };
  const moveBoard = (cate) => {
    navigate(`/board/${cate}`, { state: { cate: cate } });
  };
  const movePage = (path) => {
    navigate(path);
  };
  const handleSelect = (num) => {
    if (select === num) {
      setSelect(0);
    } else {
      setSelect(num);
    }
  };
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
                <div
                  className="select_row"
                  onClick={() => movePage("/company")}
                >
                  기업연구동
                </div>
                <div className="select_row" onClick={() => movePage("/intro")}>
                  융합원소개
                </div>
                <div className="select_row" onClick={() => movePage("/empty")}>
                  사업분야
                </div>
                <div className="select_row" onClick={() => movePage("/empty")}>
                  인프라
                </div>
              </div>
            </div>
            <div className="navi_box" onClick={() => handleSelect(2)}>
              <div className="navi_main_text">입주안내</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div className="select_row" onClick={() => movePage("/empty")}>
                  연구관 소개
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/company")}
                >
                  입주기업현황
                </div>
                <div className="select_row" onClick={() => movePage("/floor")}>
                  층별안내
                </div>
                <div className="select_row" onClick={() => movePage("/empty")}>
                  입주안내
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
              입주안내
            </div>
            <div className="title_text">입주안내</div>
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
          <div className="inquiry_area">
            <div className="inquiry_img_box">
              <div className="inquiry_img"></div>
            </div>

            <div className="vision_title_box">
              <div className="logo_box">
                <div className="logo_img"></div>
              </div>
              <div className="title_text">충남산학융합원 입주안내</div>
            </div>
            <div className="inquiry_top_box">
              <div className="top_title_box">
                <div className="top_main_title">
                  기업연구동 <span>우수기업 입주 선정</span>
                </div>
                <div className="top_main_text">
                  충남산학융합지구 기업연구동이 중소벤처기업부로부터
                  신기술창업집적지역으로 지정(2017년 9월 1일)되어 다양한 기업의
                  지원시설 로써 연구역량 강화 및 기술경쟁력을 확보 및 공간과
                  인력, 장비 등 다양한 인프라 지원 및 애로기술해결, 기술개발로
                  연구가 필요한 입 주할 기업을 신청 받습니다.
                </div>
              </div>
              <div className="top_contents_box">
                <div className="contents_text_box">
                  <div className="contents_text_row">
                    주소 : 충남 당진시 석문면 산단7로 201 충남산학융합원
                    기업연구동
                  </div>
                  <div className="contents_text_row">
                    입주공간 세부내역 : 3층 ~ 5층 운영
                  </div>
                </div>
                <div className="inquiry_table_box">
                  <div className="inquiry_table"></div>
                </div>
              </div>
              <div className="top_contents_box">
                <div className="contents_text_box">
                  <div className="contents_text_row">
                    임대료 기준 및 계약기간(부가세 별도)
                  </div>
                </div>
                <div className="inquiry_table_box bottom">
                  <div className="inquiry_table bottom"></div>
                </div>
              </div>
              <div className="top_info_box left">
                <div className="info_title">입주혜택</div>
                <div className="info_text_box">
                  <div className="info_row">
                    <div className="info_title all_padding_none">
                      정부지원 R&D (사업계획서 작성지원)
                    </div>
                  </div>
                  <div className="info_row">
                    <div className="info_title">공용장비 지원</div>
                    <div className="info_text">
                      - 공용장비 사용료 할인 및 연구개발 및 시제품 제작 장비
                      지원 등{" "}
                    </div>
                  </div>
                  <div className="info_row">
                    <div className="info_title">
                      입주기업 무료 교육 프로그램 진행{" "}
                    </div>
                    <div className="info_text">
                      - 신산업 창출을 위한 R&D 역량강화 교육 프로그램
                    </div>
                    <div className="info_text">
                      - 기업연구소(전담부서) 설치 및 신산업 전략 실습 프로그램{" "}
                    </div>
                  </div>
                  <div className="info_row">
                    <div className="info_title bottom_padding_none">
                      재직자 교육을 통한 연구역량 강화 및 법률, 특허, 세무 등의
                      컨설팅{" "}
                    </div>
                  </div>
                  <div className="info_row">
                    <div className="info_title bottom_padding_none">
                      산학융합지구 내 공용시설 제공 (교육장, 세미나실, 회의실
                      등)
                    </div>
                  </div>
                </div>
              </div>
              <div className="top_info_box right">
                <div className="info_title">입주기업 선정</div>
                <div className="info_text_box">
                  <div className="info_row">
                    <div className="info_title all_padding_none">
                      입주심사로 연구개발능력이 우수하고, 재무구조가 건전한
                      기업을 선정{" "}
                    </div>
                  </div>
                  <div className="info_row">
                    <div className="info_title">입주대상</div>
                    <div className="info_text">
                      - 철강·소재산업, 자동차 부품 산업 등 기술연구소를 운영하는
                      기업{" "}
                    </div>
                    <div className="info_text">
                      - 신기술(3D 모델링, 시뮬레이션, FEM기법 등) 벤처기업{" "}
                    </div>
                    <div className="info_text">
                      - 신산업(4차 산업혁명 아이템)등 신규 창업 기업
                    </div>
                    <div className="info_text">
                      - 기타 산학협력 활성화에 필요하다고 인정되는 기업
                    </div>
                    <div className="info_text">
                      - 기업지원을 위한 업종별 단체, 협회 지원기관 등{" "}
                    </div>
                  </div>
                  <div className="info_row">
                    <div className="info_title">입주제한 </div>
                    <div className="info_text">
                      - 충남산학융합지구 및 석문국가산업단지의 조성목적에
                      부합되지 아니하거나 공해·용수 그 밖의 사정으로 입주제한이
                      필요한 기업
                    </div>
                  </div>
                </div>
              </div>
              <div className="inquiry_img_box bottom">
                <div className="inquiry_img bottom"></div>
              </div>
            </div>
            <div className="vision_title_box">
              <div className="logo_box">
                <div className="logo_img"></div>
              </div>
              <div className="title_text">입주상담</div>
            </div>
            <div className="inquiry_bottom_box">
              <div className="bottom_row">상담 : 수시상담</div>
              <div className="bottom_row">
                방문상담 : 사단법인 충남산학융합원
              </div>
              <div className="bottom_row">
                충남 당진시 석문면 산단7로 201(구. 석문면 삼봉리 2241-1)
                기업연구동 3층 302호 사무실
              </div>
              <div className="bottom_row">문의처 : TEL . 041-354-8558</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryInfo;
