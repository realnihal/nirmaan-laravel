import React from "react";

import "./homeFirstPage.css";
import nirmaanLogo from "../images/NIRMAAN-LOGO-NEW 1.png";
import iitMadrasLogo from "../images/iitmLogo.png";
import SocialMediaIcons from "./SocialMediaIcons";
import rect from "../images/Rectangle.png";
import vect from "../images/Vector.png";

function HomeFirstPage() {
  return (
    <div className="full-page-container">
      {/* nirman logo */}
      <div className="vertical">
        WHO WE ARE
      </div>
      <div className="nirmaan-logo">
        <div className="this-is text">
          <h1>
            THIS <br></br> IS
          </h1>
        </div>
        <div className="logo">
          <img src={nirmaanLogo} />
        </div>
        <div className="text subtitle">
          <h2>
            THIS IS YOUR <br></br> SUBTITLE
          </h2>
          <p>
            Nirmaan, The Pre-Incubator,<br></br>at IIT Madras is the first of{" "}
            <br></br>its kind dedicated pre- <br></br>incubatore on a college{" "}
            <br></br>campus in the country.
          </p>
        </div>
      </div>

      {/* iit madras logo  */}
      <div className="iitmlogo">
        <img src={iitMadrasLogo} />
      </div>
      {/* social media  */}
      <div>
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
          <ul>
            <li>
              Nirmaan Studends Head <br></br>Applications Opens on January 23rd
            </li>
            <li>
              January Cohort Application opens <br></br>on 13th January
            </li>
            <li>
              Experts Talk 3.0 <br></br>February 4th
            </li>
            <li>
              Mega Event February 24th <br></br>and 25th
            </li>
            <li>
              OUR MOST <br></br> RECENT <br></br> EVENTS
            </li>
          </ul>
        </div>
        <div className="apply">
          <h3>APPLY TO NIRMAAN</h3>
        </div>
      </footer>
    </div>
  );
}

export default HomeFirstPage;
