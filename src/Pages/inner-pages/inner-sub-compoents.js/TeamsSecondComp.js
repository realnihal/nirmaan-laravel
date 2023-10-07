import React from "react";

import secondImg from "../../../images/teamsInfoSecond.png";
import "./teamsFirst.css"; //this components css properties mentioned int his file

function TeamsSecondComp({ name, designer, content }) {
  return (
    <div>
      <div className="black-div-second">
        <div className="green-stripe-second"></div>
        <div className="second-name">{name}</div>
        <div className="designer">{designer}</div>
        <div className="second-content">{content}</div>
        <div className="close">Close</div>
      </div>
      <div className="second-div-info">
        <img src={secondImg} />
      </div>
    </div>
  );
}

export default TeamsSecondComp;
