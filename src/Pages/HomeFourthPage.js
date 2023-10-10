import React from "react";

import "./homeFourthPage.css";
import dotted from "../images/Group 137.png";
import iitmlogo_2 from "../images/iitmlogo-2.png";
import nirmaanlogo from "../images/nirmaan-2.png";
import leftImg from "../images/left-img.png";
import bottom1 from "../images/bottom-1.png";
import bottom2 from "../images/bottom-2.png";
import rightImg from "../images/right-img.png";
import leftCut from "../images/left-num.png";
import bottom1Cut from "../images/bottom1-num.png";
import bottom2Cut from "../images/bottom2-num.png";
import rightCut from "../images/right-num.png";
import logoNir from "../images/logo-nir.png";

function HomeFourthPage() {
  return (
    <div className="fourth-page-container">
      <div className="team-jour">
        <div className="dotted-line">
          <img src={dotted} alt="pattern" />
          <img src={dotted} alt="pattern" />
        </div>
        <div className="nirmaan-numerical">
          <div className="our-team common">
            SEE<br></br>OUR<br></br>TEAM
          </div>
          <div className="numbers-fourthPage">
            <div className="nir-num-wrapper4">
              <div className="nir-fourthPge">NIRMAAN</div>
              <div className="num-fourthPage">IN NUMBERS</div>
            </div>
          </div>
          <div className="journey common">
            SEE<br></br>OUR<br></br>JOURNEY
          </div>
        </div>
        <div className="iitmlogo-2">
          {" "}
          <img src={iitmlogo_2} />
        </div>
      </div>
      <div className="info-num">
        <div className="images">
          <img src={leftImg} />
          <img src={bottom1} />
          <img src={bottom2} />
          <img src={rightImg} />
          <img src={leftCut} />
          <img src={bottom1Cut} />
          <img src={bottom2Cut} />
          <img src={rightCut} />
          <img src={nirmaanlogo} />
          <img src={logoNir} />
        </div>
      </div>
    </div>
  );
}

export default HomeFourthPage;
