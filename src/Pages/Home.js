import React from "react";

import "./homeFirstPage.css";
import "./homeSecondPage.css";
import "./homeThirdPage.css";
import "./homeFourthPage.css";
import HomeFirstPage from "./HomeFirstPage";
import HomeSecondPage from "./HomeSecondPage";
import HomeThirdPage from "./HomeThirdPage";
import HomeFourthPage from "./HomeFourthPage";

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
      <div className="HomeFourthPage">
        <HomeFourthPage />
      </div>
    </div>
  );
}

export default Home;
