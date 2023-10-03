import React from "react";

import "./homeSixthPage.css";
import theyAre from "../images/THEY ARE.png";
import TAU from "../images/TALKING ABOUT US.png";
import img from "../images/sixth-div-img.png";
import sixthNirmanLogoSmall from "../images/nirmaan-logo-small.png";
import vectSmall from "../images/sixth-vector-3.png";
import dottedLineSixth from "../images/Group 137.png";
import whatImg from "../images/WHAT HAPPENS IN.png";

function HomeSixthPage() {
  return (
    <div className="sixth-page-container">
      <div className="sixthpage-first-inner-div">
        <div className="they-talking">
          <img src={theyAre} />
          <img src={TAU} />
        </div>
        <div className="sixth-main-div">
          <div className="sub-div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <img src={img} className="img" />
          <div className="sixth-heading">Event #1</div>
        </div>
        <div className="sixth-main-div-2">
          <div className="sub-div">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <img src={img} className="img" />
          <div className="sixth-heading">Event #1</div>
        </div>
      </div>
      <div className="sixthpage-second-inner-div">
        <img src={dottedLineSixth} />
      </div>
      <div className="sixthpage-third-inner-div">
        <img src={whatImg} className="what-img-sixth" />
        <div className="sixth-logo">
          <img src={vectSmall} id="sixth-page-vect"/>
          <img src={sixthNirmanLogoSmall} id="sixth-page-logo"/>
        </div>
        <div className="linear-gradient-sixth">
            <p className="like">DO YOU LIKE WHAT YOU SEE?</p>
            <div className="contact"><b>CONTACT</b> <span className="us-content">US</span></div>
        </div>
      </div>
    </div>
  );
}

export default HomeSixthPage;
