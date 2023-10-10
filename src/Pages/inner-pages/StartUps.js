import React from "react";

import NavBar from "./NavBar";
import Footer from "../Footer";
import "./startUp.css";

import whatImg from "../../images/startUp-What.png";
import provideImg from "../../images/startUpProvide.png";
import dottedLine from "../../images/dotted_line.jpeg";
import iitmlogo from "../../images/iitmlogo-2.png";
import nirLogo from "../../images/NIRMAAN-LOGO-NEW 1.png";
import StartUpSUbComp from "./inner-sub-compoents.js/StartUpSUbComp";
import mentor from "../../images/mentor.png";
import brief from "../../images/brief.png";
import frame from "../../images/frame.png";
import setting from "../../images/settings (2).png";
import StartUpCard from "./inner-sub-compoents.js/StartUpCard";
import TeamSubCompTitle from "./inner-sub-compoents.js/TeamSubCompTitle";
import halfLeft from "../../images/half-first.png";
import halfRight from "../../images/halfRight.png";
import secondImg from "../../images/middleimg.png";

function StartUps(props) {
  return (
    <div>
      <NavBar />
      <div>
        <div className="sp-main">
          <div className="sp-left">
            <div className="startup-heading">
              <div className="startup-what">
                <img src={whatImg} />
              </div>
              <div>
                <img src={provideImg} />
              </div>
            </div>
            <div className="startup-logo">
              <img src={dottedLine} className="dotted-sp" />
              <img src={iitmlogo} className="logo-sp" />
              <img src={nirLogo} className="nir-sp" />
            </div>
            <div className="sp-content">
              Nirmaan, The Pre-incubator, IIT Madras, aims to provide the
              experience of Entrepreneurship to the student community. NIRMAAN
              acts as a sandbox for aspiring entrepreneurs of IIT Madras to
              practice the highs and lows of entrepreneurship with a deferred
              placement. We strive to offer our students a firsthand experience
              of what it takes to be an entrepreneur.
            </div>
          </div>

          <div className="sp-right">
            <div className="sp-grey">
              <div className="sp-white">
                <div className="sp-sub-img">
                  <StartUpSUbComp
                    image={mentor}
                    heading="Mentoring"
                    content="Project teams are connected with mentors, who will guide and nudge these groups towards business success"
                  />
                </div>
                <div className="sp-sub-img">
                  <StartUpSUbComp
                    image={brief}
                    heading="Worksops"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
                  />
                </div>
                <div className="sp-sub-img">
                  <StartUpSUbComp
                    image={frame}
                    heading="Worspace"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."
                  />
                </div>
                <div className="sp-sub-img">
                  <StartUpSUbComp
                    image={setting}
                    heading="Tools & Resources"
                    content="Wide vaariety of resources available at IITM, including advanced machining, characterisation and computing facilities"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second section */}
        <div className="second-green-section">
          <div className="sub-sp-green">
            <div className="sp-cards">
              <StartUpCard
                heading="Investors"
                apply="REACH TO US"
                content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                content2="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </div>
            <div className="sp-cards">
              <StartUpCard
                heading="Startups"
                apply="WORK WITH US"
                content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                content2="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </div>
            <div className="sp-cards">
              <StartUpCard
                heading="Interns"
                content1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
                content2="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              />
            </div>
          </div>
        </div>

        <TeamSubCompTitle
          AboutSubtitle="SEE HOW"
          AboutTopic="WE WORK"
          flag="true"
        />

        <div className="last-div-sp">
          <div>
            <img src={halfLeft} />
          </div>
          <div>
            <img src={secondImg} />
          </div>
          <div>
            <img src={halfRight} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StartUps;
