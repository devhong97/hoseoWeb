import "./assets/scss/index.scss";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import Router from "./router/Router";
import React, { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <Fragment>
      <div className="screen">
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
