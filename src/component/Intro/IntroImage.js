import React, { useState } from 'react';

const IntroImage = () => {
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
                            홈{">"}융합원 소개{">"}소개자료
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
                                <div className='select_row'>교육</div>
                                <div className='select_row'>융합원 소개</div>
                            </div>
                        </div>
                        <div className='navi_box' onClick={() => handleSelect(2)}>
                            <div className='navi_main_text'>소개자료</div>
                            <div className='navi_arrow'></div>
                            <div className={`navi_select_box ${select === 2 && "active"}`}>
                                <div className='select_row'>소개자료</div>
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