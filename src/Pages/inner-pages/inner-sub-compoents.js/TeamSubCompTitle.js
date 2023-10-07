import React from "react";

import "./teamSubCompTitle.css";

function TeamSubCompTitle({ subtitle, subContent }) {
  return (
    <div className="team-sub-main">
      <div>
        <div className="first-sutitle-div"></div>
        <div className="second-sutitle-div">{subtitle}</div>
      </div>
      <div className="sub-content">{subContent}</div>
    </div>
  );
}

export default TeamSubCompTitle;
