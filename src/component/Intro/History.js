import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const History = () => {
    const [select, setSelect] = useState(0);
    const navigate = useNavigate();
    const handleSelect = (num) => {
        if (select === num) {
            setSelect(0)
        } else {
            setSelect(num)
        }
    }
    const moveBoard = (cate) => {
        navigate(`/board/${cate}`, { state: { cate: cate } });
    };
    const movePage = (path) => {
        navigate(path);
    };
    return (
        <div className='sub_wrap'>
            <div className='sub_back'>
                <div className='sub_banner_area'>
                    <div className='sub_banner_back'>
                        <div className='navi_text'>
                            홈{">"}융합원 소개{">"}연혁
                        </div>
                        <div className='banner_main_text'>연혁</div>
                    </div>

                </div>
                <div className='navi_area'>
                    <div className='navi_back'>
                        <div className='navi_box' onClick={() => handleSelect(1)}>
                            <div className='navi_main_text'>융합원 소개</div>
                            <div className='navi_arrow'></div>
                            <div className={`navi_select_box ${select === 1 && "active"}`}>
                                <div className="select_row" onClick={() => moveBoard("notice")}>알림 및 소식</div>
                                <div className="select_row" onClick={() => movePage("/company")}>기업연구동</div>
                                <div className="select_row" onClick={() => movePage("/intro")}>융합원소개</div>
                                <div className="select_row" onClick={() => movePage("/empty")}>사업분야</div>
                                <div className="select_row" onClick={() => movePage("/empty")}>인프라</div>
                            </div>
                        </div>
                        <div className='navi_box' onClick={() => handleSelect(2)}>
                            <div className='navi_main_text'>연혁</div>
                            <div className='navi_arrow'></div>
                            <div className={`navi_select_box ${select === 2 && "active"}`}>
                                <div className='select_row' onClick={() => movePage("/intro")}>인사말</div>
                                <div className='select_row' onClick={() => movePage("/vision")}>비전 및 목표</div>
                                <div className='select_row' onClick={() => movePage("/history")}>연혁</div>
                                <div className='select_row' onClick={() => movePage("/organization")}>조직도</div>
                                <div className='select_row' onClick={() => movePage("/introduce")}>소개자료</div>
                                <div className='select_row' onClick={() => movePage("/map")}>오시는길</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sub_main_area history'>
                    <div className='sub_main_back'>
                        <div className='history_container'>
                            <div className='history_contents_box'>
                                <div className='history_top_box'>
                                    <div className='logo_box'>
                                        <div className='logo_img'></div>
                                    </div>
                                    <div className='history_title_box'>
                                        <div className='title_text'>일하고 배우고 연구하는</div>
                                        <div className='title_text'>사단법인 <span>충남산학융합원</span>의 발자취입니다.</div>
                                    </div>
                                </div>
                                <div className='history_contents_row'>
                                    <div className='year_text'>2023</div>
                                    <div className='year_contents_box'>
                                        <div className='contents_row'>
                                            <div className='contents_text'>
                                                촉기업 관리체계 안정화
                                            </div>
                                        </div>
                                        <div className='contents_row'>
                                            <div className='contents_text'>직자교육 및 중고등대학 지역 인재양성 확산</div>
                                        </div>
                                        <div className='contents_row'>
                                            <div className='contents_text'>학융합캠퍼스 활성화</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='history_contents_row'>
                                    <div className='year_text'>2022</div>
                                    <div className='year_contents_box'>
                                        <div className='contents_row'>
                                            <div className='sub_year'>2022.09</div>
                                            <div className='contents_text'>
                                                산업재해예방시설 구축사업 선정
                                            </div>
                                        </div>
                                        <div className='contents_row'>
                                            <div className='sub_year'>2022.04</div>
                                            <div className='contents_text'>

                                                산업단지기숙사지원사업 선정 (충청남도)
                                                <br />
                                                희망리턴패키지 지원사업 선정 (중소벤처기업부)
                                            </div>

                                        </div>
                                        <div className='contents_row'>

                                            <div className='sub_year'>2022.04</div>
                                            <div className='contents_text'>
                                                지역혁신프로젝트사업 선정 (고용노동부)</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='history_contents_row'>
                                    <div className='year_text'>2021</div>
                                    <div className='year_contents_box'>
                                        <div className='contents_row'>
                                            <div className='sub_year'>2021.12</div>
                                            <div className='contents_text'>
                                                <span>2021.12</span> 원장 연임 (제 4대)<br />(박성조 원장)
                                            </div>

                                        </div>
                                        <div className='contents_row'>
                                            <div className='sub_year'>2021.09</div>
                                            <div className='contents_text'>
                                                <span>2021.09</span>
                                                2021탈석탄,탄소중립 기후위기 선제대응 국제컨퍼런스 주관 충청남도(주최), 환경부(후원)
                                            </div>

                                        </div>
                                        <div className='contents_row'>
                                            <div className='sub_year'>2022.04</div>
                                            <div className='contents_text'>
                                                2단계산학융합지구촉진지원사업 (2021.03~2024.02) 프로젝트, 스마트 제조 R&D사업 등 (특화사업 클러스터 연계 강화)
                                                <br /><br />
                                                첨단화학산업지원센터 구축사업 선정 -고용안정선제대응/패키지지원사업 선정</div>
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