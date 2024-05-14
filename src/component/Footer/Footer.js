import React from "react";
import Login from "../Login/Login";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_wrap">
      <div className="footer_back">
        <div className="footer_top_box">
          <div className="footer_icon youtube"></div>
          <div className="footer_icon insta"></div>
          <div className="footer_icon youtube"></div>
          <div className="footer_icon insta"></div>
        </div>
        <div className="footer_bottom_box">
          <div className="bottom_first_info">
            <div className="line_text">충남산학융합원 소개</div>
            <div className="line_text">개인정보처리방침</div>
            <div className="line_text">이용약관</div>
            <div className="line_text">오시는길</div>
            <Link to="/login" className="line_text">
              로그인
            </Link>
          </div>
          <div className="bottom_second_info">
            <p>상호 : (사)충남산학융합원</p>
            <p>TEL : 041-354-8558</p>
            <p>FAX : 041-354-8559</p>
            <p>E-mail : master@ciuc.or.kr</p>
            <br />
            <p>주소 : 충청남도 당진시 석문면 산단7로 201 기업연구동 302호</p>
            <p>개인정보보호책임자 : 충남산학융합원(master@ciuc.or.kr)</p>
          </div>
          <div className="bottom_copy">
            Copyright © 충남산학융합원. All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
