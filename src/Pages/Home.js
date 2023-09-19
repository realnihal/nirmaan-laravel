import React, { useRef, useState } from "react";

import HomeFirstPage from "./HomeFirstPage";
import "./homeFirstPage.css";
import HomeSecondPage from "./HomeSecondPage";

function Home() {
  return (
    <div className="horizontal-scroll-container" style={{ overflowX: "auto" }}>
      <div className="homeFirstPage">
        <HomeFirstPage />
      </div>
      <div className="homeFirstPage">
        <HomeFirstPage />
      </div>
      <div className="homeFirstPage">
        <HomeFirstPage />
      </div>
      <div className="homeFirstPage">
        <HomeFirstPage />
      </div>
      <div className="homeFirstPage">
        <HomeFirstPage />
      </div>
    </div>
  );
}

export default Home;
