import React from "react";

import "./homeFirstPage.css";
import nirmaanLogo from "../images/NIRMAAN-LOGO-NEW 1.png";
import iitMadrasLogo from "../images/iitmLogo.png";
import SocialMediaIcons from "./SocialMediaIcons";
import rect from "../images/Rectangle.png";
import vect from "../images/Vector.png";
import thisIsImg from "../images/THIS IS.png";

function HomeFirstPage() {
  const handleClickApplyTo = () => {
    window.location.href = "www.google.com";
  };
  return (
    <div className="full-page-container">
      {/* nirman logo */}
      <div className="vertical">WHO WE ARE</div>
      <div className="nirmaan-logo">
        <div className="this-is-img">
          <img src={thisIsImg} />
        </div>
        <div className="logo">
          <img src={nirmaanLogo} />
        </div>
        <div className="text subtitle">
          <div className="sub-heading-first">
            <div>THIS IS YOUR</div>
            <div>SUBTITLE</div>
          </div>
          <div className="subtitle-content">
            Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind
            dedicated pre-incubator on a college campus in the country.
          </div>
        </div>
      </div>

      {/* iit madras logo  */}
      <div className="iitmlogo">
        <img src={iitMadrasLogo} />
      </div>
      {/* social media  */}
      <div className="social-icons-first">
        <SocialMediaIcons />
      </div>
      <footer>
        <div className="vect">
          <img src={vect} />
        </div>
        <div className="rect">
          <img src={rect} />
        </div>
        <div className="inner-div">
          <div className="inner-list-div">
            <div>
              Nirmaan Studends Head <br></br> Applications Opens on January 23rd
            </div>
            <div>
              January Cohort Application opens <br></br>on 13th January
            </div>
            <div>
              Experts Talk 3.0 <br></br> February 4th
            </div>
            <div>
              Mega Event February 24th <br></br> and 25th
            </div>
            <div id="last-list">
              OUR MOST <br></br>RECENT <br></br>EVENTS
            </div>
          </div>
        </div>
        <div className="apply" onClick={handleClickApplyTo}>
          <h3>APPLY TO NIRMAAN</h3>
        </div>
      </footer>
    </div>
  );
}

export default HomeFirstPage;
