import React from "react";

import "./homeFirstPage.css";
import "./homeSecondPage.css";
import "./homeThirdPage.css";
import "./homeFourthPage.css";
import HomeFirstPage from "./HomeFirstPage";
import HomeSecondPage from "./HomeSecondPage";
import HomeThirdPage from "./HomeThirdPage";
import HomeFourthPage from "./HomeFourthPage";
import HomeFifthPage from "./HomeFifthPage";
import HomeSixthPage from "./HomeSixthPage";
import HomeSeventhPage from "./HomeSeventhPage";

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
      <div className="HomeFifthPage">
        <HomeFifthPage />
      </div>
      <div className="HomeSixthPage">
        <HomeSixthPage />
      </div>
      <div className="HomeSevenththPage">
        <HomeSeventhPage />
      </div>
    </div>
  );
}

export default Home;
