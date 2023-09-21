import React from "react";

import HomeFirstPage from "./HomeFirstPage";
import "./homeFirstPage.css";
import "./homeSecondPage.css";
import HomeSecondPage from "./HomeSecondPage";

function Home() {
  return (
    <div className="horizontal-scroll-container">
      <div className="homeFirstPage">
        <HomeFirstPage />
      </div>
      <div className="HomeSecondPage">
        <HomeSecondPage />
      </div>
    </div>
  );
}

export default Home;
