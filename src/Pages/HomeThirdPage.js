import React from "react";

import "./homeThirdPage.css";
import vect3 from "../images/Vector3.png";
import nirmaanLogo from "../images/NIRMAAN-LOGO-NEW 1.png";

function HomeThirdPage() {
  return (
    <div className="thirdPage-container">
      <div className="header">
        <div className="sub-header">
          <div className="what-we-offer">
            WHAT WE <br></br> OFFER
          </div>
          <div className="logo-nirmaan">
            <div className="vect3">
              <img src={vect3} />
            </div>
            <div className="nirmaanLogo">
              <img src={nirmaanLogo} />
            </div>
          </div>
        </div>
        <div className="apply-subtitle">
            <div className="apply-to">APPLY TO NIRMAAN</div>
            <div className="subtitle-to">THIS IS YOUR SUBTITLE</div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default HomeThirdPage;
