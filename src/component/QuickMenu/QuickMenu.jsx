import React, { useState } from "react";
import { Link } from "react-router-dom";

const QuickMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  return (
    <div className="quick-menu">
      <div className="quick-menu-item" onClick={() => toggleSubMenu()}>
        {showSubMenu && (
          <div className="sub-menu">
            <div className="sub-menu-item">직원검색</div>
            <div className="sub-menu-item">질의응답</div>
            <div className="sub-menu-item">식단표</div>
            <div className="sub-menu-item">셔틀버스</div>
            <div className="sub-menu-item">
              <Link className="link-item" to="/map">
                오시는길
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickMenu;
