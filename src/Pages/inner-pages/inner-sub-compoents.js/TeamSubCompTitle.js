import React from "react";

import "./teamSubCompTitle.css";

function TeamSubCompTitle({ subtitle, subContent, flag }) {
  return (
    <div className={flag ? "conditional-class" : "team-sub-main"}>
      <div>
        <div className="first-sutitle-div"></div>
        <div className="second-sutitle-div">
          <div id={flag ? "c-title" : ""}>{subtitle}</div>
        </div>
      </div>
      <div className={flag ? "conditional-class-content" : "sub-content"}>
        {subContent}
      </div>
    </div>
  );
}

export default TeamSubCompTitle;
