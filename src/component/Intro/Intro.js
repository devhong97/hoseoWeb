import React, { useState } from 'react';

const Intro = () => {
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
                            홈{">"}교육{">"}교육일정안내
                        </div>
                        <div className='banner_main_text'>인사말</div>
                    </div>

                </div>
                <div className='navi_area'>
                    <div className='navi_back'>
                        <div className='navi_box' onClick={() => handleSelect(1)}>
                            <div className='navi_main_text'>교육</div>
                            <div className='navi_arrow'></div>
                            <div className={`navi_select_box ${select === 1 && "active"}`}>
                                <div className='select_row'>교육</div>
                            </div>
                        </div>
                        <div className='navi_box' onClick={() => handleSelect(2)}>
                            <div className='navi_main_text'>교육일정안내</div>
                            <div className='navi_arrow'></div>
                            <div className={`navi_select_box ${select === 2 && "active"}`}>
                                <div className='select_row'>교육일정안내</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sub_main_area intro'>
                    <div className='sub_main_back'>
                        <div className='intro_top_box'>
                            <div className='intro_box left'>
                                <div className='left_top_box'>
                                    <div className='logo_box'>
                                        <div className='intro_logo'></div>
                                    </div>
                                    <div className='intro_title'>
                                        서해안 시대에 준비하는 <br />새로운 <span>산학 융합의 중심</span>
                                    </div>
                                </div>
                                <div className='left_bottom_box'>
                                    <p className='color_box'></p>
                                    <p className='color_box'></p>
                                    <p className='color_box'></p>
                                </div>
                            </div>
                            <div className='intro_box right'>
                                <div className='blank_box'></div>
                            </div>
                        </div>
                        <div className='intro_bottom_box'>
                            <div className='intro_main_text'>
                                안녕하십니까? <br />충남산학융합원 사이버 공간의 방문을 진심으로 환영합니다.
                            </div>
                            <div className='intro_sub_text_row'>
                                사단법인 충남산학융합원은 도래하는 서해안 시대의 중심인 충남지역의 인적자원의 개발, 산-학 R&D 협력, 일-학습병행 및 기업 맞춤형 교육 등 새로운 일자리 창출과 기업의 혁신성장을 돕기위한 기관입니다.
                            </div>
                            <div className='intro_sub_text_row'>
                                기업의 애로사항 및 기술적 문제점을 해결하기 위하여, 호서대학교 3개 학과(로봇자동화, 신소재공학, 자동차ICT)를 이전하여 학사 과정은 물론, 근로자 평생학습과정,기업맞춤형 교육 및 산-학R&D 프로젝트을 수행하고 있습니다. 또한, 기업의 부설 연구소나 STARTUP 창업기업이 기업연구관에 입주하여 교수 및 전문가들의 도움을 받으며 가속적으로 연구활동을 수행하고 있습니다.
                            </div>
                            <div className='intro_sub_text_row'>
                                충남산학융합원은 설립 취지에 충실하게 업무를 수행함은 물론, 충남 및 지역의 특화 산업을 반영하고 미래형 사업모델을 발굴하여 지역의 발전과 대학이 동반성장 할 수 있도록 노력할 것입니다.
                            </div>
                            <div className='intro_sub_text_row'>
                                감사합니다.
                            </div>
                        </div>
                        <div className='intro_sign_box'>
                            <div className='sign_box left'>
                                <div className='sign_text_box'>
                                    사단법인 <span>충남산학융합원</span>
                                </div>
                                <div className='sign_text_box'>
                                    원장 <span>박상조</span>
                                </div>
                            </div>
                            <div className='sign_box right'>
                                <div className='sign_img'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;