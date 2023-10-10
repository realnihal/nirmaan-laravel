import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./homeSecondPage.css";
import vect2 from "../images/Vector2.png";
import whoWeAreImg from "../images/WHO WE ARE.png";

function HomeSecondPage() {
  return (
    <div className="secondPage-container">
      <div className="secondPage-inner-container">
        <div className="whoWeAre-div">
          <div className="who-heading">
            <img src={whoWeAreImg} />
          </div>
          <div className="meetOurTeam-div">
            <div className="team-heading">MEET OUR TEAM</div>
            <img src={vect2} className="vect2-logo" />
          </div>
        </div>
        <div className="about-nirmaan">
          <div className="about-nirman-first-content">
            Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind
            dedicated pre-incubator on a college campus in the country.
          </div>
          <div className="about-nirman-second-content">
            It works with Atal Innovation Mission and provides technical support
            and business guidance/mentorship to enterprising student teams.
            NIRMAAN provides a sandbox space for the young aspiring
            entrepreneurs at IIT Madras to work on their business ideas and make
            <br></br> them technically sound and economically viable.
          </div>
        </div>
        <div className="projects">
          <b>SEE OUR</b> PROJECTS{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            size="xs"
            style={{ color: "#000000" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeSecondPage;
