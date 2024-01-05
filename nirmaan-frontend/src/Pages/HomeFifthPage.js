import React, { useEffect, useState, useRef } from "react";

import "./homeFifthPage.css";
import nirmanLogoSmall from "../images/nirmaan-logo-small.png";
import vectSmall from "../images/vecto3-small.png";
import dottedLineFifth from "../images/Group 137.png";
import greenLogo from '../images/fifth-screen-logo.png'
import FifthScreenContent from "./sub-components/FifthScreenContent";
import API_BASE_URL from "../config";

function HomeFifthPage() {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    // Fetch users from Laravel API
    fetch(API_BASE_URL+'/stories')
      .then((response) => response.json())
      .then((data) => setStories(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="fifth-page-container">
      <div className="first-inner-div">

        <div className="fifth-screen__left">
          <div className="fifth-screen__left-titles">
            <h1>THEY <br/> ARE</h1>
            <h2>TALKING <br/> ABOUT <br/> <span className="left-title-small">
            US
            </span></h2>
          </div>
          <div className="fifth-screen__left-logo">
            <img src={greenLogo} alt="Logo" />
          </div>
        </div>
        <div className="fifth-screen__center">
          <div className="toggler">
            <div className="toggler-green"></div>
          </div>
        </div>
        <div className="fifth-screen__right">

        <div className="fifth-screeen__what-happens">
        WHAT 
        <span className="what-happens-small">
        HAPPENS
        </span>
         IN
        </div>
        {stories.map((story)=>{
          return(
          <FifthScreenContent
            text={"“ " + story.story +" ”"}
            name={story.name +  " - "}
            subtitle={"  "+ story.designation}
          />
          );
        })}
          
          {/* <FifthScreenContent
            text={"“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"}
            name={"Matias Righi -"}
            subtitle={"Designer at NIRMAAN"}
          /> */}
        </div>
      </div>

    </div>
  );
}

export default HomeFifthPage;


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