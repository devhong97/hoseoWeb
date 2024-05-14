import React, { useEffect, useState } from "react";
import Login from "../Login/Login";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Footer = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const [isLogged, setIsLogged] = useState(getCookie("Access") === "true");

  useEffect(() => {
    setIsLogged(getCookie("Access") === "true");
  }, []);

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
            {isLogged ? (
              <div className="line_text" onClick={() => logout()}>로그아웃</div>
            ) : (
              <div className="line_text" onClick={() => navigate("/login")}>로그인</div>
            )}
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
