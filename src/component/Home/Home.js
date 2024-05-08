import React, { useEffect, useState } from "react";
import MainSwiper from "../swiper/MainSwiper";

const Home = () => {

  return (
    <div className="main_wrap">
      <div className="main_back">
        <div className="scroll_box">
          <div className="scroll_icon"></div>
        </div>
        <div className="main_banner_box">
          <MainSwiper></MainSwiper>
        </div>
        <div className="home_menu_container">
          <div className="home_menu_box">
            <div className="home_menu_row">
              <div className="home_menu_icon first"></div>
            </div>
            <div className="home_menu_row">
              <div className="home_menu_icon second"></div>
            </div>
            <div className="home_menu_row">
              <div className="home_menu_icon third"></div>
            </div>
            <div className="home_menu_row">
              <div className="home_menu_icon fourth"></div>
            </div>
            <div className="home_menu_row">
              <div className="home_menu_icon fifth"></div>
            </div>
            <div className="home_menu_row">
              <div className="home_menu_icon sixth"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
