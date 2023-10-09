import React from "react";

import "./about.css";

import TeamSubCompTitle from "./inner-sub-compoents.js/TeamSubCompTitle";
import TimeLine from "./inner-sub-compoents.js/TimeLine";
import nirmanLogo from "../../images/NIRMAAN-LOGO-NEW 1.png";
import iitmLogo from "../../images/iitmlogo-2.png";
import aboutVect from "../../images/teams-vect.png";
import aboutVectLeft from "../../images/teamsVectLeft.png";

function About() {
  return (
    <div>
      <img src={aboutVectLeft} className="about-vect-left" />
      <div>
        <TeamSubCompTitle
          AboutSubtitle="THIS IS OUR"
          AboutTopic="JOURNEY"
          subContent="Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind dedicated pre-incubator on a college campus in the country."
        />
        <TimeLine />
        <div className="sub-comp-about">
          <TeamSubCompTitle
            AboutSubtitle="NIRMAAN IN"
            AboutTopic="NUMBERS"
            flag="true"
            subContent="Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind dedicated pre-incubator on a college campus in the country."
          />
        </div>
        <img src={aboutVect} className="about-vect-right"/>
        <div className="nirman-numbers">
          <div className="nir-left">
            <img src={nirmanLogo} className="a-nir-logo" />
            <div>
              <img src={iitmLogo} className="a-iitm-logo" />
            </div>
          </div>
          <div className="numbers-main">
            <div className="numbers-5">
              <div className="num-heading">
                TEAMS TRAINED
                <div className="num-info trained">141</div>
              </div>
              <div className="num-heading">
                GRADUATED TEAMS
                <div className="num-info grad">21</div>
              </div>
              <div className="num-heading">
                ACTIVE TEAMS
                <div className="num-info active">48</div>
              </div>
              <div className="num-heading">
                FUNDS RAISED
                <div className="num-info funds">60+ Cr</div>
              </div>
            </div>
            <div className="num-heading total-margin">
              TOTAL VALUATION
              <div className="num-info total">405+ Cr</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
