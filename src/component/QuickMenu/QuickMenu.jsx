import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const QuickMenu = ({ topRef }) => {
  const navigate = useNavigate();
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const scrollTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const movePage = (path) => {
    navigate(path);
  };
  const moveBoard = (cate) => {
    navigate(`/board/${cate}`, { state: { cate: cate } });
  };
  return (
    <div className="quick-menu">
      <div className="quick-menu-header" onClick={() => toggleSubMenu()}>
        <div className="quick-menu-plus">+</div>
        <div className="quick-menu-title">퀵메뉴</div>
      </div>
      {/* {showSubMenu && ( */}
      <div className="quick-menu-item">
        <div className="sub-menu">
          <div
            className="sub-menu-item"
            onClick={() => movePage("/fusionSupportProgram")}
          >
            <div className="icon_formation"></div>
            <div className="text">사업분야</div>
          </div>
          <div
            className="sub-menu-item"
            onClick={() => movePage("/inquiryinfo")}
          >
            <div className="icon_inquiryinfo"></div>
            <div className="text">입주안내</div>
          </div>
          <div className="sub-menu-item" onClick={() => moveBoard("business")}>
            <div className="icon_business"></div>
            <div className="text">사업공고</div>
          </div>
          <div
            className="sub-menu-item"
            // onClick={() => moveBoard("facility")}
            onClick={() =>
              navigate("/board/facility/write", { state: { step: 1 } })
            }
          >
            <div className="icon_facility"></div>
            <div className="text">시설예약</div>
          </div>
          <div className="sub-menu-item top" onClick={() => scrollTop()}>
            <div className="icon_top"></div>
            <div className="text top">TOP</div>
          </div>
        </div>
        {/* )} */}
      </div>
    </div>
  );
};

export default QuickMenu;
