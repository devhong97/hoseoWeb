import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import enterprise_img from "../../../../assets/image/hopeReturnPackage_img.jpg";

const HopeReturnPackage = () => {
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
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

  return (
    <div className="sub_wrap">
      <div className="sub_back">
        <div className="sub_banner_area">
          <div className="sub_banner_back">
            <div className="navi_text">
              <div className="home_icon_sub"></div>
              {"> "}사업분야{" > "}창업 육성 사업
            </div>
            <div className="banner_main_text">창업 육성 사업</div>
          </div>
        </div>
        <div className="navi_area">
          <div className="navi_back">
            <div
              className="navi_box business_field"
              onClick={() => handleSelect(1)}
            >
              <div className="navi_main_text">창업육성사업</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 1 && "active"}`}>
                <div
                  className="select_row"
                  onClick={() => movePage("/fusionSupportProgram")}
                >
                  산학융합지구조성사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/chungnamInnovationProject")}
                >
                  기업지원사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/localIndustryTalentDevelopment")}
                >
                  인재양성사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/dangjinStartupSupport")}
                >
                  창업육성사업
                </div>
              </div>
            </div>
            <div className="navi_box founded" onClick={() => handleSelect(2)}>
              <div className="navi_main_text">희망리턴패키지 사업</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div
                  className="select_row"
                  onClick={() => movePage("/dangjinStartupSupport")}
                >
                  당진시 창업지원사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/hopeReturnPackage")}
                >
                  희망리턴패키지 사업
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/hongseongIssueWarehouse")}
                >
                  홍성군 잇슈창고운영사업
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub_main_area temporary">
          <div className="sub_main_back image_box">
            <div className="fusionSupportProgram">
              <div className="hopeReturnPackage_img"></div>
              {/* <img src={enterprise_img}></img> */}
            </div>
            {/* <div className="vision_container">
              <div className="vision_title_box">
                <div className="logo_box">
                  <div className="logo_img"></div>
                </div>
                <div className="title_text">충남산학융합원 중장년 창업지원</div>
              </div>
              <div className="founded_img_box first">
                <a href="http://djstart.co.kr/" target="_blank">
                  <div className="founded_img first"></div>
                </a>
              </div>
              <div className="founded_text_box">
                <div className="founded_text_row">
                  <div className="text_title">
                    예비창업자 및 초기 창업자 회원 발굴
                  </div>
                  <div className="text_box">
                    <div className="text_row">
                      {" "}
                      - 회원발굴 설명회 연중 진행{" "}
                    </div>
                    <div className="text_row">
                      - 일자리박람회 부스 참석 및 홈페이지, SNS, 언론보도,
                      현수막 참조{" "}
                    </div>
                  </div>
                </div>
                <div className="founded_text_row">
                  <div className="text_title">
                    스타트업 실전창업관(맞춤형 창업과정 운영){" "}
                  </div>
                  <div className="text_box">
                    <div className="text_row">
                      - 온라인 활용이 상대적으로 어려운 중장년 창업가 대상
                      온라인 매체 활용 교육{" "}
                    </div>
                    <div className="text_row">
                      - E커머스 특감, 성공창업 CEO특강 신기술 트렌드 및 창업
                      간접 경험 기회 제공{" "}
                    </div>
                    <div className="text_row">
                      - 실패 사례 분석으로 기업 생존률과 창업 성공률 증대{" "}
                    </div>
                  </div>
                </div>
                <div className="founded_text_row">
                  <div className="text_title">스타트업 부트캠프 </div>
                  <div className="text_box">
                    <div className="text_row">
                      - 지역 내 기업 방문을 통한 예비 퇴직자 발굴{" "}
                    </div>
                    <div className="text_row">
                      - 예비 퇴직자들의 전문성과 노하우를 살려 초기창업 할 수
                      있는 창업가 육성{" "}
                    </div>
                    <div className="text_row">
                      - 지역 내 우수 인재 발굴을 통한 창업 활성화 및 지역경제
                      발전 도모{" "}
                    </div>
                  </div>
                </div>
                <div className="founded_text_row">
                  <div className="text_title">
                    멘토링 및 네트워킹 프로그램 운영{" "}
                  </div>
                  <div className="text_box">
                    <div className="text_row">
                      - 기업 고충 및 애로사항을 해결하는 근본적인 해결책 도출{" "}
                    </div>
                    <div className="text_row">
                      - 간접 경험을 통한 창업 시야 확대 및 사업계획 변화 도모{" "}
                    </div>
                    <div className="text_row">
                      - 네트워킹을 통한 인력자원 확보 및 노하우 습득 지원{" "}
                    </div>
                  </div>
                </div>
                <div className="founded_text_row">
                  <div className="text_title">선택형 기업지원 </div>
                  <div className="text_box">
                    <div className="text_row">
                      - 중장년 기술창업센터 회원 및 운영 사업 참여자들의 사업
                      운영을 위한 사업화 자금 지원{" "}
                    </div>
                    <div className="text_row">
                      - 각 프로그램별 우수기업 선정을 통해, 창업 독려 및
                      프로그램 참여 촉진
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vision_container">
              <div className="vision_title_box">
                <div className="logo_box">
                  <div className="logo_img"></div>
                </div>
                <div className="title_text">충남산학융합원 청년 창업지원</div>
              </div>
              <div className="founded_img_box second">
                <a href="https://www.dangjin.go.kr/narae.do" target="_blank">
                  <div className="founded_img second"></div>
                </a>
              </div>
            </div>
            <div className="vision_container">
              <div className="vision_title_box">
                <div className="logo_box">
                  <div className="logo_img"></div>
                </div>
                <div className="title_text">1. 청년 창업 플랫폼</div>
              </div>
              <div className="founded_img_box third">
                <div className="founded_img third"></div>
              </div>
              <div className="founded_text_box">
                <div className="founded_text_row">
                  <div className="text_box small">
                    <div className="text_row">
                      - 지역의 혁신적인 창업 아이디어를 가진 청년
                      예비(초기)창업가 지원
                    </div>
                    <div className="text_row">
                      - “CEO-100 프로그램”, “아이디어고도화”,
                      “창업상담창구(멘토링, 컨설팅) 등
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="vision_container">
              <div className="vision_title_box">
                <div className="logo_box">
                  <div className="logo_img"></div>
                </div>
                <div className="title_text">
                  2. 액셀러레이팅과 입주기업 성장 지원
                </div>
              </div>
              <div className="founded_img_box fourth">
                <div className="founded_img fourth"></div>
              </div>
              <div className="founded_img_box fifth">
                <div className="founded_img fifth"></div>
              </div>
              <div className="founded_img_box sixth">
                <div className="founded_img sixth"></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HopeReturnPackage;
