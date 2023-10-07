import React from "react";

import teamInfo from "../../../images/teamsinfo.png";
import "./teamsFirst.css";

function TeamsFirstComp({ name, tagLine }) {
  return (
    <div className="first-img">
      <img src={teamInfo} />
      <div className="black-stripe">
        <div className="name">{name}</div>
        <div className="tagline">{tagLine}</div>
      </div>
      <div className="green-stripe"></div>
    </div>
  );
}

export default TeamsFirstComp;
