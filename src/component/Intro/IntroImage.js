import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const IntroImage = () => {
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
                            <div className="home_icon"></div>{"> "}융합원 소개{" > "}소개자료
                        </div>
                        <div className='banner_main_text'>소개자료</div>
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
                            <div className='navi_main_text'>소개자료</div>
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
                        <div className='vision_container introduce'>
                            <div className='vision_title_box'>
                                <div className='logo_box'>
                                    <div className='logo_img'></div>
                                </div>
                                <div className='title_text'>CI 소개</div>
                            </div>
                            <div className='introduce_image_box'>
                                <div className='introduce_image top'></div>
                                <div className='introduce_image bottom'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroImage;