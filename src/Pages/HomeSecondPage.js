import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./homeSecondPage.css";
import vect2 from "../images/Vector2.png";

function HomeSecondPage() {
  return (
    <div className="secondPage-container">
      <div className="whoWeAre-div">
        <div className="who-heading">
          WHO<br></br>WE<br></br>ARE{" "}
        </div>
        <div className="meetOurTeam-div">
          <div className="team-heading">
            MEET OUR <br></br>TEAM
          </div>
          <div className="vect2-logo">
            <img src={vect2} />
          </div>
        </div>
      </div>
      <div className="about-nirmaan">
        <p>
          Nirmaan, The Pre-incubator, at IIT Madras is the first of its kind
          <br></br>
          dedicated pre-incubator on a college campus in the country. <br></br>
          <br></br> It works with Atal Innovation Mission and provides technical
          support<br></br> and business guidance/mentorship to enterprising
          student teams.<br></br>
          NIRMAAN provides a sandbox space for the young aspiring<br></br>{" "}
          entrepreneurs at IIT Madras to work on their business ideas and make
          <br></br> them technically sound and economically viable.
        </p>
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
  );
}

export default HomeSecondPage;
