import React from "react";

import HomeFirstPage from "./HomeFirstPage";
import "./homeFirstPage.css";
import "./homeSecondPage.css";
import "./homeThirdPage.css";
import HomeSecondPage from "./HomeSecondPage";
import HomeThirdPage from "./HomeThirdPage";

function Home() {
  return (
    <div className="horizontal-scroll-container">
      <div className="homeFirstPage">
        <HomeFirstPage />
      </div>
      <div className="HomeSecondPage">
        <HomeSecondPage />
      </div>
      <div className="HomeThirdPage">
        <HomeThirdPage />
      </div>
    </div>
  );
}

export default Home;
