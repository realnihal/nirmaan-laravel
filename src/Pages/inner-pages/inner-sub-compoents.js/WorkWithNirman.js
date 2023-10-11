import React from "react";

import "./workWithNirman.css";

function WorkWithNirman({ role, duration, Stipend, link, startUp, tech }) {
  const handleClickApply = () => {
    window.location.href = { link };
  };
  return (
    <div className="wwn-main">
      <div className="wwn-role">{role}</div>
      {startUp ? (
        <div>
          <div className="wwn-start-up">{startUp}</div>
          <div className="wwn-tech">{tech}</div>
        </div>
      ) : null}
      <div className="wwn-duration">{duration}</div>
      <div className="wwn-stipend">{Stipend}</div>
      <div className="wwn-apply" onClick={handleClickApply}>
        APPLY
      </div>
    </div>
  );
}

export default WorkWithNirman;
