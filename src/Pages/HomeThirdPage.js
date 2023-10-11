import React from "react";

import "./homeThirdPage.css";
import vect3 from "../images/Vector3.png";
import nirmaanLogo from "../images/NIRMAAN-LOGO-NEW 1.png";
import mentoring from "../images/mentor.png";

import StartUpSUbComp from "./inner-pages/inner-sub-compoents.js/StartUpSUbComp";

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
      <div className="grey-div">
        <div className="white-div">
          <div className="white-inner-div">
            <div className="white-inner-div-common-style">
              <StartUpSUbComp
                image={mentoring}
                heading="Mentoring"
                content="Project teams are connected with mentors, who will guide and nudge these groups towards business success"
                thirdComp="true"
              />
            </div>

            <div className="white-inner-div-common-style">
              <StartUpSUbComp
                image={mentoring}
                heading="Workshops"
                thirdComp="true"
                content="Project teams are connected with mentors, who will guide and nudge these groups towards business success "
              />
            </div>
            <div className="white-inner-div-common-style">
              <StartUpSUbComp
                image={mentoring}
                heading="Workspace"
                thirdComp="true"
                content="Project teams are connected with mentors, who will guide and nudge these groups towards business success"
              />
            </div>
            <div className="white-inner-div-common-style">
              <StartUpSUbComp
                thirdComp="true"
                image={mentoring}
                heading="Participation"
                content="Project teams are connected with mentors, who will guide and nudge these groups towards business success"
              />
            </div>
            <div className="white-inner-div-common-style">
              <StartUpSUbComp
                thirdComp="true"
                image={mentoring}
                heading="Tools & Resources"
                content="Project teams are connected with mentors, who will guide and nudge these groups towards business success"
              />
            </div>
            <div className="white-inner-div-common-style">
              <StartUpSUbComp
                thirdComp="true"
                image={mentoring}
                heading="Pre-Seed funding"
                content="Project teams are connected with mentors, who will guide and nudge these groups towards business success"
              />
            </div>
            <div className="white-inner-div-common-style">
              <StartUpSUbComp
                thirdComp="true"
                image={mentoring}
                heading="Secure Facility"
                content="Project teams are connected with mentors, who will guide and nudge these groups towards business success"
              />
            </div>
            <div className="white-inner-div-common-style">
              <StartUpSUbComp
                thirdComp="true"
                image={mentoring}
                heading="OtherServices"
                content="Project teams are connected with mentors, who will guide and nudge these groups towards business success"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-third"></div>
    </div>
  );
}

export default HomeThirdPage;
