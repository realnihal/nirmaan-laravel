import React, { useState, useEffect } from "react";

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
  const [currentPage, setCurrentPage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [secondPageContent, setSecondPageContent] = useState(null);

  const pages = 7;

  // useEffect(() => {
  //   if (currentPage === 2) {
  //     setSecondPageContent(
  //       <div className="HomeThirdPage">
  //         <HomeThirdPage />
  //       </div>
  //     );
  //   }
  // }, [currentPage]);

  const handleWheelScroll = (e) => {
    if (!isScrolling) {
      if (e.deltaX > 0 && currentPage < pages - 1) {
        scrollPage("right");
      } else if (e.deltaX < 0 && currentPage > 0) {
        scrollPage("left");
      }
    }
  };

  const scrollPage = (direction) => {
    setIsScrolling(true);
    if (direction === "left") {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === "right") {
      setCurrentPage((prevPage) => prevPage + 1);
    }

    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  return (
    <div className="horizontal-scroll-container" onWheel={handleWheelScroll}>
      {currentPage === 0 && (
        <div className="homeFirstPage">
          <HomeFirstPage />
        </div>
      )}
      {currentPage === 1 && (
        <div className="HomeSecondPage">
          <HomeSecondPage />
        </div>
      )}
      {currentPage === 2 && (
        <div className="HomeThirdPage">
          <HomeThirdPage />
        </div>
      )}
      {currentPage === 3 && (
        <div className="HomeFourthPage">
          <HomeFourthPage />
        </div>
      )}
      {currentPage === 4 && (
        <div className="HomeFifthPage">
          <HomeFifthPage />
        </div>
      )}
      {currentPage === 5 && (
        <div className="HomeSixthPage">
          <HomeSixthPage />
        </div>
      )}
      {currentPage === 6 && (
        <div className="HomeSevenththPage">
          <HomeSeventhPage />
        </div>
      )}
    </div>
  );
  // return (
  //   <div className="horizontal-scroll-container">
  //     <div className="homeFirstPage">
  //       <HomeFirstPage />
  //     </div>
  //     <div className="HomeSecondPage">
  //       <HomeSecondPage />
  //     </div>
  //     <div className="HomeThirdPage">
  //       <HomeThirdPage />
  //     </div>
  //     <div className="HomeFourthPage">
  //       <HomeFourthPage />
  //     </div>
  //     <div className="HomeFifthPage">
  //       <HomeFifthPage />
  //     </div>
  //     <div className="HomeSixthPage">
  //       <HomeSixthPage />
  //     </div>
  //     <div className="HomeSevenththPage">
  //       <HomeSeventhPage />
  //     </div>
  //   </div>
  // );
}

export default Home;
