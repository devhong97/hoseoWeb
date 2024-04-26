import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className={`header_wrap`}>
      <div className="main_fixed_box">
        호서대 헤더
      </div>
    </div>
  );
};

export default Header;
