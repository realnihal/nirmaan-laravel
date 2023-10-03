import React from "react";

import "./homeFifthPage.css";
import nirmanLogoSmall from "../images/nirmaan-logo-small.png";
import vectSmall from "../images/vecto3-small.png";
import dottedLineFifth from "../images/Group 137.png";

function HomeFifthPage() {
  return (
    <div className="fifth-page-container">
      <div className="first-inner-div">
        <div className="they-capital">
          THEY<br></br>
          ARE<br></br>
        </div>
        <div className="talking-div">
          TALKING <br></br>
          ABOUT <br></br>
        </div>
        <div className="us-div">US</div>
        <div className="image-logo">
          <img src={vectSmall} className="vect-small" />
          <img src={nirmanLogoSmall} className="nir-small" />
        </div>
      </div>
      <div className="second-inner-div">
        <img src={dottedLineFifth} />
        <div className="switch-outer-div">
          <div className="switch-inner-div"></div>
        </div>
      </div>
      <div className="third-inner-div">
        <div className="what-div">WHAT</div>
        <div className="happens-div">HAPPENS</div>
        <div className="stacked-div">
          <div className="below-div">
            Matias Righi - <b>Designer at NIRMAAN</b>
          </div>
          <div className="above-div">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.”
          </div>
        </div>
        <div className="stacked-div-2">
          <div className="below-div">
            Matias Righi - <b>Designer at NIRMAAN</b>
          </div>
          <div className="above-div">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.”
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeFifthPage;
