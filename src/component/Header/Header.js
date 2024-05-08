import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`header_wrap`}>
      <div className="header_top_box">
        <div className="header_back">
          <div className="top_small_menu">HOME</div>
          <div className="top_small_menu">SITEMAP</div>
          <div className="top_small_menu">CONTACT</div>
        </div>
      </div>
      <div className="header_bottom_box">
        <div className="header_back">
          <div className="logo_box">
            <div className="logo_img"></div>
          </div>
          <div className="right_box">
            <div className="menu_box">
              <div className="main_menu">교육</div>
              <div className="main_menu">융합원 아카이브</div>
              <div className="main_menu">알림 및 소식</div>
              <div className="main_menu">기업연구동</div>
              <div className="main_menu">융합원 소개</div>
              <div className="main_menu">사업분야</div>
              <div className="main_menu">지원사업</div>
            </div>
            <div className="icon_box">
              <div className="menu_icon"></div>
              <div className="menu_icon list"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
