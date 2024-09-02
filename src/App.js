import "./assets/scss/index.scss";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Router from "./router/Router";
import React, { Fragment, useEffect, useState, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Scroll from "./component/Home/Scroll";
import QuickMenu from "./component/QuickMenu/QuickMenu";
function App() {
  //commit
  //test   //
  const topRef = useRef(null);

  return (
    <Fragment>
      <Scroll />
      <QuickMenu topRef={topRef} />
      <div className="screen">
        <div ref={topRef}></div>
        <div className="header_area">
          <Header />
        </div>
        <div className={`main_area`}>
          <Router />
          <div className="footer_area">
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
