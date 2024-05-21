import React, { useState } from 'react';

const Field = () => {
    const [select, setSelect] = useState(0);

    const handleSelect = (num) => {
        if (select === num) {
            setSelect(0)
        } else {
            setSelect(num)
        }
    }
    return (
        <div className='sub_wrap'>
            <div className='sub_back'>
                <div className='sub_banner_area'>
                    <div className='sub_banner_back'>
                        <div className='navi_text'>
                            <div className="home_icon"></div>{"> "}알림 및 소식{" > "}공지사항
                        </div>
                        <div className='banner_main_text'>충남산학융합지구조성사업</div>
                    </div>

                </div>
                <div className='navi_area'>
                    <div className='navi_back'>
                        <div className='navi_box' onClick={() => handleSelect(1)}>
                            <div className='navi_main_text'>알림 및 소식</div>
                            <div className='navi_arrow'></div>
                            <div className={`navi_select_box ${select === 1 && "active"}`}>
                                <div className='select_row'>알림 및 소식</div>
                            </div>
                        </div>
                        <div className='navi_box' onClick={() => handleSelect(2)}>
                            <div className='navi_main_text'>공지사항</div>
                            <div className='navi_arrow'></div>
                            <div className={`navi_select_box ${select === 2 && "active"}`}>
                                <div className='select_row'>공지사항</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sub_main_area vision'>
                    <div className='sub_main_back'>
                        <div className='field_container'>
                            <div className='field_top_box'>
                                <div className='field_title_box'>
                                    충남당진산학융합지구
                                    <p>석문국가산업단지</p>
                                </div>
                                <div className='field_icon_box'>
                                    <div className='field_icon'>대학</div>
                                    <div className='plus_icon'>+</div>
                                    <div className='field_icon company'>기업</div>
                                </div>
                            </div>
                            <div className='field_img_box'>
                                <div className='field_img'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Field;