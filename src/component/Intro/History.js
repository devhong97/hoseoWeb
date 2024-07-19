import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const History = () => {
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
              {"> "}융합원 소개{" > "}연혁
            </div>
            <div className="banner_main_text">연혁</div>
          </div>
        </div>
        <div className="navi_area">
          <div className="navi_back">
            <div className="navi_box" onClick={() => handleSelect(1)}>
              <div className="navi_main_text">융합원소개</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 1 && "active"}`}>
                <div className="select_row" onClick={() => moveBoard("notice")}>
                  알림 및 소식
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/formation")}
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
              <div className="navi_main_text">연혁</div>
              <div className="navi_arrow"></div>
              <div className={`navi_select_box ${select === 2 && "active"}`}>
                <div className="select_row" onClick={() => movePage("/intro")}>
                  인사말
                </div>
                <div className="select_row" onClick={() => movePage("/vision")}>
                  비전 및 목표
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/history")}
                >
                  연혁
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/organization")}
                >
                  조직도
                </div>
                <div
                  className="select_row"
                  onClick={() => movePage("/introduce")}
                >
                  소개자료
                </div>
                <div className="select_row" onClick={() => movePage("/map")}>
                  오시는 길
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sub_main_area history">
          <div className="sub_main_back">
            <div className="history_container">
              <div className="history_contents_box">
                <div className="history_top_box">
                  <div className="logo_box">
                    <div className="logo_img_sub"></div>
                  </div>
                  <div className="history_title_box">
                    <div className="title_text">일하고 배우고 연구하는</div>
                    <div className="title_text">
                      사단법인 <span>충남산학융합원</span>의 발자취입니다.
                    </div>
                  </div>
                </div>
                <div className="history_contents_row">
                  <div className="year_text">2024</div>
                  <div className="year_contents_box">
                    <div className="contents_row">
                      <div className="contents_text">
                        가족기업 관리체계 안정화
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="contents_text">
                        재직자교육 및 중고등대학 지역 인재양성 확산
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="contents_text">산학융합캠퍼스 활성화</div>
                    </div>
                  </div>
                </div>
                <div className="history_contents_row">
                  <div className="year_text">2023</div>
                  <div className="year_contents_box">
                    <div className="contents_row">
                      <div className="sub_year">2023.01</div>
                      <div className="contents_text">
                        충남국가혁신클러스터 사업 선정
                        <p>- 2023.01~2025.12 산업통상자원부</p>
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2023.03</div>
                      <div className="contents_text">
                        시군구연고산업육성 사업 선정
                        <p>- 2023.03~2024.02 중소벤처기업부</p>
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2023.04</div>
                      <div className="contents_text">
                        준법경영시스템(ISO37301) 인증서 획득
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2023.08</div>
                      <div className="contents_text">
                        2023 탄소중립실증보유시설구축 사업 선정
                        <p>- 2023.08.~2027.12. 산업통상자원부</p>
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2023.10</div>
                      <div className="contents_text">
                        2023 탄소중립 국제 컨퍼런스 주관
                        <p>- 충청남도(주최),환경부,외교부(후원)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history_contents_row">
                  <div className="year_text">2022</div>
                  <div className="year_contents_box">
                    <div className="contents_row">
                      <div className="sub_year">2022.03</div>
                      <div className="contents_text">
                        지역혁신프로젝트사업 선정
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2022.04</div>
                      <div className="contents_text">
                        산업단지기숙사지원사업 선정 (충청남도)
                        <br />
                        희망리턴패키지 지원사업 선정 (중소벤처기업부)
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2022.09</div>
                      <div className="contents_text">
                        산재예방시설 구축사업 선정
                        <p>- 2022.09~2026.09 고용노동부</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history_contents_row">
                  <div className="year_text">2021</div>
                  <div className="year_contents_box">
                    <div className="contents_row">
                      <div className="sub_year">2021.03</div>
                      <div className="contents_text">
                        2021 산학융합촉진지원사업 선정
                        <p>- 2021.3.~2023.2. 산업통상자원부</p>
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2021.05</div>
                      <div className="contents_text">
                        지역활력프로젝트(태양광통합유지관리)사업 선정
                        <p>- 2021.10~2022.12 산업통상자원부</p>
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2021.09</div>
                      <div className="contents_text">
                        2021 탈석탄·탄소중립 기후위기 선제대응 국제컨퍼런스 주관
                        <p>- 충청남도(주최),환경부(후원)</p>
                        <br />
                        엑셀러레이터 기관 등록
                        <p>- 중소벤처기업부-창업기획자</p>
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2021.10</div>
                      <div className="contents_text">
                        이전공공기관연계육성(수소openlab)사업 선정
                        <p>- 2021.10~2022.12 산업통상자원부</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history_contents_row">
                  <div className="year_text">2020</div>
                  <div className="year_contents_box">
                    <div className="contents_row">
                      <div className="sub_year">2020.09</div>
                      <div className="contents_text">
                        2020 탈석탄기후위기대응국제컨퍼런스 주관
                        <p>- 충청남도(주최), 환경부(후원)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history_contents_row">
                  <div className="year_text">2019</div>
                  <div className="year_contents_box">
                    <div className="contents_row">
                      <div className="sub_year">2019.04</div>
                      <div className="contents_text">
                        충남 첨단금속소재산업 초정밀기술지원센터 선정
                        <p>- 2019.04.~2022.12.산업통상자원부</p>
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2019.05</div>
                      <div className="contents_text">
                        산학연융합촉진사업 선정
                        <p>- 2019.05.~2020.12. 산업통상자원부</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history_contents_row">
                  <div className="year_text">2017</div>
                  <div className="year_contents_box">
                    <div className="contents_row">
                      <div className="sub_year">2017.01</div>
                      <div className="contents_text">
                        {"<"}사단법인 충남산학융합본부{">"} 이전
                        <p>- 당진 석문국가산업단지 내</p>
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2017.03</div>
                      <div className="contents_text">
                        {"<"}사단법인 충남산학융합원{">"} 명칭 변경
                        <p>- 산업통상자원부</p>
                      </div>
                    </div>
                    <div className="contents_row">
                      <div className="sub_year">2017.07</div>
                      <div className="contents_text">
                        지역산업맞춤형 인력양성 사업 선정
                        <p>- 충청남도 여섯 번째 고용노동부</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history_contents_row">
                  <div className="year_text">2016</div>
                  <div className="year_contents_box">
                    <div className="contents_row">
                      <div className="contents_text">
                        충남당진산학융합지구 조성 완료
                        <p>- 2015.10. 착공/2016.12.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history_contents_row">
                  <div className="year_text">2015</div>
                  <div className="year_contents_box">
                    <div className="contents_row">
                      <div className="contents_text">
                        충남당진산학융합지구 조성 완료
                        <p>- 2015.10. 착공/2016.12.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history_contents_row">
                  <div className="year_text">2014</div>
                  <div className="year_contents_box">
                    <div className="contents_row">
                      <div className="sub_year">2014.07</div>
                      <div className="contents_text">
                        (사)충남당진산학융합본부 법인 설립 허가
                        <p>- 산업통상자원부</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="history_contents_row">
                  <div className="year_text">2013</div>
                  <div className="year_contents_box">
                    <div className="contents_row">
                      <div className="sub_year">2013.05</div>
                      <div className="contents_text">
                        충남당진산학융합지구 조성사업 선정
                        <p>- 2013.9.1.~2018.6.30.</p>
                        <p>
                          - 산업통상자원부, 충청남도, 당진시, 호서대학교,
                          한국산업단지공단
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
